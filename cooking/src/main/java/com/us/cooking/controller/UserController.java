package com.us.cooking.controller;

import com.us.cooking.dto.JWTokenDTO;
import com.us.cooking.dto.UserDTO;
import com.us.cooking.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
@RequiredArgsConstructor
public class UserController {

    private final UserService userService;

    @PostMapping(value = "/login")
    public JWTokenDTO login(@Valid @RequestBody UserDTO userDTO) {
        return userService.authenticateAndGetToken(userDTO);
    }

    @PostMapping(value = "/logout")
    public void logout() {
        //CustomLogoutHandler sie tym zajmuje
    }

    @PostMapping(value = "/signup")
    public void signup(@Valid @RequestBody UserDTO userDTO) {
        userService.addUser(userDTO);
    }

}
