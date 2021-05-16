package com.us.cooking.service;

import com.us.cooking.config.security.JWTUtils;
import com.us.cooking.config.security.UserDetailsImpl;
import com.us.cooking.model.TokenBlockListEntity;
import com.us.cooking.model.UserEntity;
import com.us.cooking.repository.TokenBlockListRepository;
import com.us.cooking.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Service
@RequiredArgsConstructor
public class AuthUserService implements UserDetailsService {

    private final UserRepository userRepository;
    private final TokenBlockListRepository tokenBlockListRepository;
    private final JWTUtils jwtUtils;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String s) throws UsernameNotFoundException {
        UserEntity user = userRepository.findByUsername(s)
                .orElseThrow(() -> new UsernameNotFoundException("Couldn't found user"));
        return UserDetailsImpl.build(user);
    }

    public void logoutUser(String token) {
        addTokenToBlockList(token);
        SecurityContextHolder.clearContext();
    }

    public void addTokenToBlockList(String authToken) {
        if (authToken == null)
            return;
        authToken = authToken.replace("Bearer ", "");
        TokenBlockListEntity blockToken = new TokenBlockListEntity();
        blockToken.setToken(authToken);
        blockToken.setExpiredAt(jwtUtils.getExpiredTimeFromToken(authToken));

        tokenBlockListRepository.save(blockToken);
    }
}
