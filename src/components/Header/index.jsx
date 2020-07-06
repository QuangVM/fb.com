import React, { useState} from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import useImage from 'use-image';
import logo from "./logo.png";
import { BrowserRouter, Route, Link } from "react-router-dom";



function Header() {
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const submitValue = () => {
        const frmdetails = {
            'First Name' : fName,
            'Last Name' : lName,
            'Phone' : phone,
            'Email' : email
        }
        console.log(frmdetails);
    }

    return (
        <div className='header'>
            <a href="https://facebook.com"><img src={logo} alt="" /></a>
            <div class='form'>
                <table>
                    <tbody>
                        <tr class='infor'><td >Email hoặc điện thoại</td><td>Mật khẩu</td></tr>
                        <tr><td ><input onChange={} class='text text1' type='text' name='username' /></td><td ><input class='text text2' type='password' name='password' /></td><input class='submit' type='submit' value='Đăng nhập' /></tr>
                        <tr><td></td><td class='forgot'>Quên mật khẩu</td></tr>
                    </tbody>
                </table>
            </div>
        </ div>
    );
}



export default Header;