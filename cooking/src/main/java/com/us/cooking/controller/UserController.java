package com.us.cooking.controller;

import com.us.cooking.config.security.UserDetailsImpl;
import com.us.cooking.dto.ChangePasswordDTO;
import com.us.cooking.dto.JWTokenDTO;
import com.us.cooking.dto.UserDTO;
import com.us.cooking.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

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

    @PutMapping("/changePassword")
    public void changeUserPassword(@Valid @RequestBody ChangePasswordDTO passwordDTO, @AuthenticationPrincipal UserDetailsImpl userDetails, @RequestHeader("Authorization") String token) {
        userService.changePassword(passwordDTO, userDetails, token);
    }

    @DeleteMapping("/deleteUser")
    public void deleteUser(@AuthenticationPrincipal UserDetailsImpl userDetails) {
        userService.deleteUser(userDetails);
    }

}
