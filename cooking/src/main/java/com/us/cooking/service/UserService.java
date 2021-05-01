package com.us.cooking.service;

import com.us.cooking.config.security.JWTUtils;
import com.us.cooking.dto.JWTokenDTO;
import com.us.cooking.dto.UserDTO;
import com.us.cooking.mapper.UserMapper;
import com.us.cooking.model.RoleEntity;
import com.us.cooking.model.UserEntity;
import com.us.cooking.repository.RoleRepository;
import com.us.cooking.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.HashSet;
import java.util.Set;

@Service
@RequiredArgsConstructor
public class UserService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    private final JWTUtils jwtUtils;

    public JWTokenDTO authenticateAndGetToken(UserDTO userDTO) {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                userDTO.getUsername(), userDTO.getPassword()
        ));

        return new JWTokenDTO(jwtUtils.generateToken(authentication));
    }

    @Transactional
    public void addUser(UserDTO userDTO) {
        if (userRepository.existsByUsername(userDTO.getUsername()))
            throw new RuntimeException("User already exist");

        Set<RoleEntity> roleSet = new HashSet<>();
        roleSet.add(
                roleRepository.findByName(RoleEntity.URole.USER) //Obecnie tylko jedna rola w systemie
                        .orElseThrow());

        UserEntity user = UserMapper.mapToUser(
                userDTO.getUsername(),
                passwordEncoder.encode(userDTO.getPassword()),
                roleSet);

        userRepository.save(user);
    }

    public UserEntity getUser(String username) {
        return userRepository.findByUsername(username)
                .orElseThrow();
    }
}
