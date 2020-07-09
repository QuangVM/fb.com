import React from 'react';
import './Content.scss';
import world from "./world.png";
import HomePage from '../customer/HomePage';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


Content.propTypes = {

};

const passRegex = RegExp(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,10}$/
);



function Home() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function Users() {
    return <h2>Users</h2>;
}

function Content(props) {
    return (
        <div>
            <Router>
                <Link to='/'>Home</Link>
                <Link to='/customer/HomePage'>HomePage</Link>
                <Link to='/Users'>Users</Link>

                <Switch>
                    <Route path='/customer/HomePage'><HomePage /></Route>
                    <Route path='/Users'><Users /></Route>
                    <Route path='/'><Home /></Route>
                </Switch>
            </Router >


            <div class="content">
                <div class='side'>
                    <p>Facebook giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</p>
                    <div><img src={world} alt="" /></div>
                </div>

                <div class='main'>
                    <div class='informain'>
                        <p class='dangky'>Đăng ký </p>
                        <p class='nhanhchong'>Nhanh chóng và dễ dàng.</p>
                    </div>
                    <div className="formdangnhap">
                        <div class=''><input placeholder='Họ' class='hoten hoten1' type="text" /><input placeholder='Tên' class='hoten ' type="text" /></div>
                        <div><input placeholder='Email' class='email' type="text" /></div>
                        <div><input placeholder='Password' class='password' type="password" /></div>
                        <div class='ngaysinh'>Ngày sinh</div>
                        <div>
                            <select id="browsers">
                                <option value="">Ngày</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                                <option value="13">13</option>
                                <option value="14">14</option>
                                <option value="15">15</option>
                                <option value="16">16</option>
                                <option value="17">17</option>
                                <option value="18">18</option>
                                <option value="19">19</option>
                                <option value="20">20</option>
                                <option value="21">21</option>
                                <option value="22">22</option>
                                <option value="23">23</option>
                                <option value="24">24</option>
                                <option value="25">25</option>
                                <option value="26">26</option>
                                <option value="27">27</option>
                                <option value="28">28</option>
                                <option value="29">29</option>
                                <option value="30">30</option>
                                <option value="31">31</option>
                            </select>
                            <select id="browsers">
                                <option value="">Tháng</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                                <option value="11">11</option>
                                <option value="12">12</option>
                            </select>
                            <select id="browsers">
                                <option value="">Năm</option>
                                <option value="1980">1980</option>
                                <option value="1982">1982</option>
                                <option value="1983">1983</option>
                                <option value="1984">1984</option>
                                <option value="1985">1985</option>
                                <option value="1986">1986</option>
                                <option value="1987">1987</option>
                                <option value="1988">1988</option>
                                <option value="1989">1989</option>
                                <option value="1990">1990</option>
                                <option value="1991">1991</option>
                                <option value="1992">1992</option>
                                <option value="1993">1993</option>
                                <option value="1994">1994</option>
                                <option value="1995">1995</option>
                                <option value="1996">1996</option>
                                <option value="1997">1997</option>
                                <option value="1998">1998</option>
                                <option value="1999">1999</option>
                            </select>
                            <div class='ngaysinh'>Giới tính</div>
                            <input type='radio' name='gender' value='male'></input> <label class="gender">Nam</label>
                            <input type='radio' name='gender' value='female'></input> <label class="gender">Nữ</label>
                            <input type='radio' name='gender' value='female'></input> <label class="gender">Tùy chỉnh</label>
                            <p class='d'>Bằng cách nhấp vào Đăng ký, bạn đồng ý với<a href='' class='link'> Điều khoản</a>,
                            <a href='' class='link'>Chính sách dữ liệu</a> và <a href='' class='link'>Chính sách cookie</a> của chúng tôi. Bạn có thể nhận được thông báo
                            của chúng tôi qua SMS và hủy nhận bất kỳ lúc nào.
                            </p>
                            <button type="button" class="btn btn-success nut" >Đăng ký</button>
                            <p class='d'><a href='' class='link'> Tạo trang</a> dành cho người nổi tiếng, nhãn hiệu hoặc doanh nghiệp.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;