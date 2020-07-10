import React from 'react';
import styled from 'styled-components';
function HomeRight(props) {
    return (
        <div>
            <Wrapper>
                <div className="sidebar">
                    <div className="containersidebar">
                        <div style={profilearea6} >
                            <a href="#">Sinh nhật</a>
                        </div>
                        <div>
                            <a href="#"><img src="happy.png" /> Hôm nay là sinh nhật của ...</a>
                        </div>
                    </div>
                    <hr />
                    <div className="containersidebar">
                        <div style={profilearea6} >
                            <a href="#">Người liên hệ</a>
                        </div>
                    </div>
                    <div className="chat-sidebar">
                        <div id="chatnamebox" className="chat-sidebar">Alo</div>
                        <div id="chatnamebox1" className="chat-sidebar">Blo</div>
                        <div id="chatnamebox2" className="chat-sidebar">Clo</div>
                        <div id="chatnamebox3" className="chat-sidebar">Dlo</div>
                        <div id="chatnamebox4" className="chat-sidebar">Elo</div>
                        <div id="chatnamebox5" className="chat-sidebar">Flo</div>
                        <div id="chatnamebox6" className="chat-sidebar">ABC</div>
                        <div id="chatnameboxp1" className="chat-sidebar"><img src="anhdaidien.png" id="profpic" /></div>
                        <div id="chatnameboxp2" className="chat-sidebar"><img src="anhdaidien.png" id="profpic" /></div>
                        <div id="chatnameboxp3" className="chat-sidebar"><img src="anhdaidien.png" id="profpic" /></div>
                        <div id="chatnameboxp4" className="chat-sidebar"><img src="anhdaidien.png" id="profpic" /></div>
                        <div id="chatnameboxp5" className="chat-sidebar"><img src="anhdaidien.png" id="profpic" /></div>
                        <div id="chatnameboxp6" className="chat-sidebar"><img src="anhdaidien.png" id="profpic" /></div>
                        <div id="chatnameboxp7" className="chat-sidebar"><img src="anhdaidien.png" id="profpic" /></div>
                    </div>
                </div>
            </Wrapper>
        </div>
    );
}
const Wrapper = styled.div`
    .sidebar {
    position: fixed;
    background-color: #18191a;
    width: 100%;
    height: 100%;
    top: 60px;
    left: 1025px;

  }
  #containersidebar {
    display: flex;
    flex-basis: 20px;
    margin-left: 10px;
  }
  a{
      margin-left:155px;
  }
`
const profilearea6 = {
    fontSize: '20px',
    color: '#b0b3b8',
    marginTop: '20px',
}
export default HomeRight;
