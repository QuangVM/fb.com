import React from 'react';
import PropTypes from 'prop-types';
import './Footer.scss';

footer.propTypes = {

};

function footer(props) {
    return (
        <div className='footer'>
            <a href="https://facebook.com"></a>
            <div class='form'>
                <table>
                    <tbody>
                        <tr class='infor'><td >Email hoặc điện thoại</td><td>Mật khẩu</td></tr>
                        <tr><td ><input class='text text1' type='text' name='Tài khoản' /></td><td ><input class='text text2' type='password' name='Mật khẩu' /></td><input class='submit' type='submit' value='Đăng nhập' /></tr>
                        <tr><td></td><td class='forgot'>Quên mật khẩu</td></tr>
                    </tbody>
                </table>
            </div>
        </ div>
    );
}

export default footer;