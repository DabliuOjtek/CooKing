package com.us.cooking.config.security;

import com.auth0.jwt.exceptions.TokenExpiredException;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.us.cooking.model.ExceptionBody;
import com.us.cooking.repository.TokenBlockListRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@Component
@RequiredArgsConstructor
public class AuthTokenFilter extends OncePerRequestFilter {

    private final JWTUtils jwtUtils;
    private final TokenBlockListRepository tokenBlockListRepository;

    @Override
    protected void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain)
            throws ServletException, IOException {
        DecodedJWT verifiedToken = null;

        try {
            verifiedToken = jwtUtils.verifyToken(httpServletRequest.getHeader("Authorization"));
        } catch (TokenExpiredException e) {
            httpServletRequest.setAttribute("tokenExpired", true);
        }

        if (verifiedToken != null && !tokenBlockListRepository.existsByToken(verifiedToken.getToken())) {
            UserDetails userDetails = jwtUtils.getUserFromToken(verifiedToken);

            UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(
                    userDetails, null, userDetails.getAuthorities());

            SecurityContextHolder.getContext().setAuthentication(authentication);
        }

        filterChain.doFilter(httpServletRequest, httpServletResponse);
    }
}
