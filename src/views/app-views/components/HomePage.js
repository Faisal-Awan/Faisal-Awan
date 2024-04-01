import React from 'react';
import { Layout, Menu, Card, Carousel, Button, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { RiPresentationLine } from "react-icons/ri";
import { Link } from 'react-router-dom';



const { Header } = Layout;
const { Footer } = Layout;

const iconBlockStyle = {
    display: 'flex',
    padding: '20px',
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'background-color 0.3s',
};

const textStyle = {
    display: 'flex',
    margin: '5px 0px 0px 20px',
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
};

const HeaderComponent = () => {
    const handleLoginClick = () => {
        // Handle login button click
    };



    const SliderWithText = ({ image, text }) => (
        <div style={{ position: 'relative', width: '100%', height: '600px' }}>
            <div style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: '#1677ff', fontSize: '24px', fontStyle: 'italic' }}>
                <h1>{text} <span className="dot-animation">...</span> </h1>
            </div>
            <img src={image} alt="Slider" style={{ width: '100%', height: '100%' }} />
            <div className="slider-text" style={{ position: 'absolute', bottom: '20px', textAlign: 'center', width: '100%', color: 'white' }}>
                Text overlay for Slider {text} Text overlay for Slider {text} Text overlay for Slider {text}
            </div>
        </div>
    );

    return (
        <>
            <Header style={{ position: 'sticky', top: 0, zIndex: 1, backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div className="logo" style={{ width: '300px', height: '31px', background: 'rgba(255, 255, 255, 0.2)', margin: '12px 24px 16px 0', float: 'left' }}>
                        <Link to="/">
                            <RiPresentationLine style={{ width: '40px', height: '40px', marginRight: '10px' }} />LMS
                        </Link>
                    </div>
                    <Menu mode="horizontal" style={{ float: 'right', lineHeight: '64px', background: 'rgba(255, 255, 255, 0.2)' }}>
                        <Menu.Item key="1"> <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item key="2"> <Link to="/about">About</Link>
                        </Menu.Item>
                        <Menu.Item key="3"> <Link to="/contact">Contact</Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Button type="primary" icon={<UserOutlined />}>
                                <Link to="/login">Login</Link>
                            </Button>
                        </Menu.Item>
                    </Menu>
                </div>
            </Header>

            <div>

                <div>
                    <style>
                        {`
                        @keyframes dotAnimation {
                            0%, 33.33% { content: '.'; }
                            66.66% { content: '..'; }
                            100% { content: '...'; }
                        }

                        .dot-animation {
                            display: inline-block;
                            overflow: hidden;
                            vertical-align: bottom;
                            animation: dotAnimation 0.1s steps(4) infinite;
                            white-space: nowrap;
                        }
                        `}
                    </style>
                    <Carousel autoplaySpeed={2000}>
                        <SliderWithText image="slider2.jpg" text="Welcome to Online Assessment System" />
                        <SliderWithText image="slider1.jpg" text="Welcome to Online Assessment System" />
                        <SliderWithText image="slider3.jpg" text="Welcome to Online Assessment System" />
                        <SliderWithText image="slider4.jpg" text="Welcome to Online Assessment System" />
                    </Carousel>
                </div>

                <section style={{ backgroundColor: '#f8f9fa' }}>
                    <div className="container" style={{ padding: '40px' }}>
                        <Row justify="center" gutter={[16, 16]}>
                            <Col span={24} className="text-center">
                                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                                    <span style={{ fontSize: '20px', display: 'block', color: '#ef470d' }}>Top categories</span>
                                    <h3 style={{ fontSize: '34px', color: '#0c2e60', margin: '30px 0px 80px 0px' }}>Pick The Right Category Build<br /> Your Career</h3>
                                </div>
                            </Col>
                        </Row>

                        <Row justify="center" gutter={[16, 16]}>
                            <Col xs={24} sm={12} md={6} lg={6}>
                                <a href="#" className="icon-list-block" style={iconBlockStyle}>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA3QAAAN0BcFOiBwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAPsSURBVFiFtZdbaBx1FMZ/5//fmUyyTTbJNkkNWLAUxJRaqRcQTLQlUER8VPECfRAURfvke+ibD4IPFbw9CeqDBV9FLMYGaWsv2IsgGE1oGttm0+6m2STdnZ2Z40PSdSfJtNNcPtiHPXzn+745c/jPjKgqd/Dxycnmqjf/IchBIMc6oKpUfJ+6vohakYtEZv/Q033FOzzT2FT15l8FObTh5otFCaNoj2Sijxq5sQCCvLAe40TzBkShHkgMoGA30xwAkZinSeKlxeXLRa5evZXOfBXcV4AbN+Y4e3YiVhsdLeD7ARXf58L5qxSLC5sTYHz8JsePj5LPt9Rrvh9QLC7Q0emhqrR3ePx28jJXJmZSB8ikIV24MMnY2E36+3fS3d1ar1+7Nksu5+G4i6uzfXsH2RaXM2euUC5X6dvVc0/tVBMYG7vJgw+2x8xVlcl/S3R1b4lx81uz9Pa2MTFRSiOdLsDg4MMUCmVOnBgjDKP6wk0X5uju+T9AGEacOzvJjel5+vt3bFyA1laPwcFH8P2AkZG/qfg+M6UFokjp6Giu806fmsCvBvQ/u4PsFjdVgFQ7AOC6loGBnUxNz6KqFApzdHVlEZE6p29XD205L1bbsACqSrVWI5fzAHhoR56aH8Y4ufbm1VrXH2C1QyaTMWQy6z7H7r0Daz3h0iI2gYujwUQQhCONNWPpFGiG9Pf1bnBd/kwMUCgF24GBDXFKhP7R+G/Z01Avba75So9YgMjK58D4JvqPL3nUIcuX6/BhzK895wfU2PYklbAyNxj61dcaa9Zt+tZ6W44l9UgUzjwz9djI0BDRXQOkwb4jp79Go9fjDuab4fefeuN+tVIfRI2wTd5elucW9q5FK/UE9n966XERdoshi+onq6vJexoxr8qln9/ZfS6NbuoJiOFRQV9ZuvIfVyWpvigCSw+DVAHWtAMbiRUTeOKLc0575Hy5ZkWjXx17a88wwIHPLnaHwpui+k8wVfp+eOi54J4BWt28pTp7cK3+qpwChvcd/iVjH+j8HaVXRTDb8keAQyvyJgmF1dv45RIa1qjOTAFQKV1HoxC/XCT0KwQLswQLs4R+Bb9cjPWbbZ3Po/T65RJh9TYCB18+enTFd0fiElrXwzhNiBHctq0ANOW6EGNxsu2ICOosvvUIgsksewNSySOKk80t7aS2Tc8/6QCxl4jEAFHgE9Wq2KYWavO3kmhY10OsQ1ir4LS0NSqEIIipD1m7sgvR8v7EAGIzGBEwBuu1JNEQm0HEYPHiFxA5P1kb1ABnyf/Ydy/1+cv7E3dAjMVk3EVxtznxZ6yzyHXit2D43b7rirwN/IXyA5H9YDWf/wAJsKx9WYBfRgAAAABJRU5ErkJggg==" alt="" />
                                    <span style={textStyle}>IT & Software</span>
                                </a>
                            </Col>
                            <Col xs={24} sm={12} md={6} lg={6}>
                                <a href="#" className="icon-list-block" style={iconBlockStyle}>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARMSURBVFiF3ZZfaFtlGMaf9zsnJjlJas5SG9b5Z60rDt3VQNTZaS3Itivxwm6IllSl6+qqQ5hVDBjRsdWhF7aTWnU6GBujOBDU3YgyaPFmKjiZlIJMx9bN0mbtluQk53zf60WTJqtJc1JExecu3/t8v/f5/uScA/zLIgDgvj7vrKX1AfQ4GHeBsAqMWRAmQDi5yusM0eBgFgCmu/dsJBYvEbgVQEOec4VB45rCO+bH7/5YC1MHgGTQfAbWtYPFSAAIEQCbwNiUrAunAAwDgIA4CfAdSxaylsBrlU4PAmiqhSkAwNy1LRLqbD/tWbf6LAV8MyBSFPDNeFrWnA11tp82d25pLHSq63o0o0fD49DoAoA0gDQ0cUGPhsfrutrtgs8tUwcAaEL3NEcf9jRHS1cVASOi0vOQc0mrMKjfHllft2vb0qM02LFvU8np4ohL5kIA1q+C7RlWMgLpgB0bnM2ArRSYWWmh+nNFBo1BOa0sJSAdcM6CstJgKwNhBK8s2lwyFwKQEwbIgG1NcjZHAAvSdCXMKJPPuFWl58PFANzKSl1kK5WGlALMJPwBSWY0AGU3FnO6Y+Z3gLMg4Sd/qIX8+TbSAWfSkFPnQT5/fck2XiXds4ZCZiEQOGtBXZuByqS4mNMdcyEAhAYpx1RqvontbD1nM15mqUh4LGGEpkQw+HNJgMucTf+m0teb2c4ZnMsKIiHpJu+sHlmdKdrcMfNHwDo0rVXUmSV9IMAwVHr+Tjk/t7FkfD15DWheo9Srs2M33HAJXTIXAijxFaB6WTm3lLswwggdL4F8CiVj5S4h+YzJRZdLZuERAf7pC1MRPcdK3XvufPKJu5vMURLaGUHiI7pn62zpMuxfTrWRI3dMTaceYWZqbAh+w6Sf8GzY+m2prxbmDeqJxS/1PptYV9FQ9CV6YvFENd/OWLylJxa/WK6ml53BfEA59qmeWPw4ASkwJaU3d2JkZGCuWjMA2BNLhLMsO0BsKqYgsdoBIfaX84pyg8NH9r2nNHQBsBVgKvBmkfN8393df7Ob5hacMwq8WQEmEecAERv+5M2hcv7yOwBg5PC+MQBjhd89sfhRkfN0APhwuQAWOdtZ4bsPjrz1dLWwQMklXKrU4ECCCK+7gVQTM94I9PUnytXKHsE/qYpHUCrnyvWKNfty5VpBIuxrW0mAETC2gHC/Hg1WNC1Xy+sHktxZMVylQqCv/5Kf/W0MPlytQ2XRMX/O0+p/8ZXfKzrcYFJDb3cTeAiAx2VnCeA1Y3f/QNWILoHIDB14iEGjKH6IVtKsUGK774W9X7vhug4AANb7+5tZis+ZsKGCZUIIPObr7Z9wy6zpb+jrffVXn8g8APBnS2vE+NLy8H21NAdq3IGCmJkyhw4eBfjJPOaY//m9TxERLz/zr1rRg4iImJkX3/3MPLmS5isO8HfqfxCAMKpYHlrpdFfvgrIS+AOKOozdL4+umPFf0J9QSFlahnWHXQAAAABJRU5ErkJggg==" alt="" />
                                    <span style={textStyle}>Data science</span>
                                </a>
                            </Col>
                            <Col xs={24} sm={12} md={6} lg={6}>
                                <a href="#" className="icon-list-block" style={iconBlockStyle}>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAO6SURBVFiF7Zffa1NnGMe/75s0VUyiSY0ruxm7GexiziK1aE9Ogn/AXEeHJmNjNUy2TnGwMMdqJWh1yoJjImO7GigLCIWhgzEYs79Oq0I3LezGMdjFQGtMTpJSYcl53/fZxWlqWrZTPVlwF/vevHDOc77P5/2eh5dzgCcsBgDy545TILwPwNeCHjUAWc/24tA/VsjrgSrNBMMtaA66EeiQNwJ/OhaJqU3ktLrVI/tYP0aaarSWnPy9AEBWG2rfP90yCLLWKKheeaalCTj5cwAgqxXD/1BO/jZAra21AA7+/xEAq8UADv7/J8ABAIK1FMDJ3z6IZPM9iud6gt7q+v2M6CUAWwF0ADABzJEE8pm4f0tmfHH1c3YCsrlzqHJaT7Y9aP+VCdpOCp8woZ4PfjDBILzPkaAsE5Rb1y5/Wfg41vf3BiO6a4LKiH60MqLfLp2Mb3OqKx3Xuyoj+u3KidihxutLCbhsflxPQuJ1zkkLDY3fcqoNHZu8yYWIQtHBUkZ/ZQWAmxkoZnqCJHBWEd8b+GjqPgCUhqOx8rCeBoDyMTvV8rCeLg1HYwAQyMzklcA+puhsPhP3LwO4mQEu2gdI0Q+hjL1zc0jTmKJLJNlPjZ5KqetM0aXyUX03AIROTN6EommfkImmEoCl9pClcgBgHtE0JjFK5EmETk2MNXqGTxqGEugnoXLlD20IZbEcBOtrSMAFgGIvtnE+ax7RNKYwygRP1puv9gyfMQwi9JNUuXJa3+3z+GZJYusygJsESGKj/7dOExb7Wkme3ZSdvLrq/gqFzxiGkjyrFH21wTdfIknBZQBXCUhUFjvnw5D0GpcqXX7Pjrfh/gqZhzWNS5Vmgr9ZrAQjkGyhAYBqC+/u6HgsAEFzllLd4c8Mg6yld3ywAaJhsM1Be0ZAlAidmxjzWN5uSHULWDqKISlrwXen+I72yJ9GpAACuwvgu/DnhmEOav0KarTwtp7c/MXk1forMAc1jYBRqSgROT89BgBKUYIRrjzWhlcrPxj3F1O9v5dSelf9WmkgGiumetMAUExpZK+96dKAfQ4AQOGtXd3FlHb3j1d3rgeW/ozcqvCG1gei0wIU7bw4k1+r/l6i5ynu9V4D2OHIReNboD4DLrX5gvGNqtF5T5VN5fft7HKqLezd1c2l9xqrsi/rzYEmE1g236P1EaNPAUyDU04JObulU5iF+XURxvkOgkqAoAPsQOTyw+b/GgAA5ONxP9sgkkT0MsBeAGgjgAUwzDGwy4sPvBeeHR93/kd8EvoLKkPf8MfSeV0AAAAASUVORK5CYII=" alt="" />
                                    <span style={textStyle}>IT & Software Development</span>
                                </a>
                            </Col>
                            <Col xs={24} sm={12} md={6} lg={6}>
                                <a href="#" className="icon-list-block" style={iconBlockStyle}>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAADdAAAA3QFwU6IHAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAa1QTFRF////7dvbu+673+/vuNW46en0yurf5+f34en4/9ppxurN5+35n9d3ndl32enp5Or0/9xpoth2teu/4uv15Ojx5Oj21+vn4+r04+r15Or25Or25ev24+n05un33urtvd6u5ujh5On15On15Ov15en45ez14+r25ur24+r25Ov25Oj25Ov25ev44+v25ev24+r34uj15Oj1xeK/y+PF4+n34+v15ev3zeTL5Or14ur15Or15er25ev4tey94ezz0ebR5On35er3z+TQ5Or1/N53odd5s+u+5en25Or29uGXsee25Or25Or2oNh54OvyoNd4n9d5tOy+4+r15er3sOWq/9xowurOtezAtOu+tevA7ubGtOu+4OnxterA5Or2t+vC0eTS6ujYruaqr+ertOy9ruSsruas4ery5+nq/t1yruastOu+t+vA0ubVtuzBtevAoNd4tOu+5Or2/9xptOu+5Ov25On25Ov23urwodd6/91roNd4oNd4odd4oNd44Orx4enwoNd5/91q5Or3oNd5oNd4oNd4odd5oNZ4/9xp/9xpoNd4tOu+5Or2/9xp0F6k1QAAAIt0Uk5TAA4PEBIXGCAiIiQqLS8vMDM0NDQ4OD9ISlRWWFxdY2VlZ2hoampubm9wcXF0dXV4e3t8f39/f4SEhYWIi5CQl5ien5+hpaWlqKmqrK2vr7e4uLi4u7zAxcjJzM/P0NDR0dHS0tLT09PT09TU1NTV1tfX19vg4OHh4+bo6err7Ozs7e7w8fLz8/T3/jqxFeAAAAG8SURBVDjLzZPtN1RBHIB/XCLUhLxeyk5sbGokih1lUBm2Elcl1e0NFXpTIipqWDHzu39zd1+c3bs6x1fPl/nwe86ZZ2bOABwBKocLocephXqHQbETA4g5xcCceqh1eqBwuBKWsAgcpMBQAkEFoJCARAYUHSjCJaC0T5yjl0SENosoDQkRolHRQi+Ii5SKPkr9TZaxBgRysNEFC9ECF23gKKAGl/0xY128lUV4GwvzDtbOeTvr4GHWxiOslXcxBpjdMP3uwalgA4KUDXavbLbDsttu+uN5XwZko31VnrdbZK/dIGWg4e2u563l+Q1nrn99eCPdQMiEW0ei7mXS6MZuensjp0ns6QdjzKOTde4EIcEGfHncv4fqJybB83vJBqVKrTsqVHBlc8iqUt8sa2X1o0nx+FipUumGa9/1emfqHkpmzD6Lb5Kv4QtlP7TWW+8TwsaCyfAsH5Jb9P/UCbbOqpWS7LkxU/mJyBOpudY7L1ZnTJAp/5iDv/U+O5MmF4CyXzrD9vwBIdmXZczlCsG5b8zmCDqX+Owhgo6/PkTQ8VfZwqf/GH8zxmcov3U/w1h6vTs6nuJ2xVH4mv8AYVcb7fnLqMQAAAAASUVORK5CYII=" alt="" />
                                    <span style={textStyle}>Graphics design</span>
                                </a>
                            </Col>
                        </Row>

                        <Row justify="center" gutter={[16, 16]} style={{ marginTop: '25px' }}>
                            <Col xs={24} sm={12} md={6} lg={6}>
                                <a href="#" className="icon-list-block" style={iconBlockStyle}>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAeCAAAHggFwQHG1AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAcJQTFRF/////wAA/////4AA////qqqqv0BAzMzM/zMz1dXV////2///3///oqK56+vr8vLyvMjT6U5Dvzcuvzgooai1vzkt0dbR7PHxvjwq7PHxoqa35ko+50097fHxLTE40tXSwTsr6Es+0dXR6Es96/Hx0NPT5009laCy5ks85k0+LjE4maC00NXT7PHx7PHx7e/x50w90tTS6Es+5k09yj8wtr3J1EQz3Uk4y0EvkJms5kw+40s750w85kw94FRItbzJxDws0tXSLTA4vzsr50096E096GFU5ks9kJmt7PDy5ks90dTS3Ec40dTT50w90dPSwTor4FFE7PDyipOn1UQ10NTSLTA54Uk67PDx2UU2zUExzkEyzEAy7fDxzUAw3Uc44kw8yT8u4Us94Us8yT4v4Eg65kw96/Dx52FT52NW5kw86GRW7PDw7PHx7O/x0dTS0dTS50w97PDxxD0s0dTSLTA5xT0s50w9LS85wTws401AwTsrYm2KY26KwDsrX2qILTA5VWGAWmaEvcPOwDsr50w97PDx7vHy7vLy7vLz8PP08/b29Pb39ff39ff49vj49/j59/n5+Pn6+vv7/f7+/v7+7CdhIAAAAIB0Uk5TAAEBAgIDBAUFBgYHCAsNExcXHCAmKCw2Nzc8Pj9ISUlOTlRYW1xgY2ZnaWltbW5vdoKEhYaIiImNkZGTlJebnJydnqCgo6Omqquwt7e4uLu8vr7CwsXGxsnKzMzOz9DR1NbW19nb3t7j4+Tk5OXm5+nq6uzs7/Hy9/j4+/z9/f4eLkHDAAABQElEQVQ4y53P1VbDQBCA4aFQ3N3dobi7u7u7S3C3LiQDgRbnfUnaEjZtkov+d7vznbM7AM4VWpmjNfavvydkWHXsbTh8IITceSiPdanriCIggYrzuFlEDRAxhKgBAjoR+WcNMIH854/JEbjEpmQVFNe0tiH//cErPFHFWdtE8xfK/6Ar1EF804INbOPbOw3qYkB/nAwnxmUJPD7R4JJLgsZ+MFLgxSQHXZCwJwPmVznog/B9OKeAlA2kQ1o3ZI8tqYDBTE8YzRXWbFcBwpr6Xi8BBBX1TM6vbp1tOIK/mlmWDQPXHVVQNnIkAIhi1ED5+KIIwDefUQYVcxcWIJA8RglUr83YgEAMu46g4ZSVgIWI4MbtH7Rw0xQA8Cm9JqSDurCuSeeXEU0faw+m7IBdJStXbLAWiLxlB0CzkER3cLZf9oTfth0qj3kAAAAASUVORK5CYII=" alt="" />
                                    <span style={textStyle}>Marketing</span>
                                </a>
                            </Col>
                            <Col xs={24} sm={12} md={6} lg={6}>
                                <a href="#" className="icon-list-block" style={iconBlockStyle}>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAAgSAAAIEgHhc9o4AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAASZQTFRF/////wAA/4CA/1VV/4BA/1VV32BA5mZN62JO7mZE72BQ8GlL5F5D6F1G6WRD62JF7WRJ7WFG5mNK6GRG6mBF62JI52VH6GNG62FH7GNH6WJI6mJI6mBH7GFJ6WRG6WJJ6mBI62FG6WJH6mJH6mNI6mJI62FH62JJ6mJH6mJJ6mFI6mNH62JJ6WJI6WFH6mNJ62JH62JI6WJI6mFI6mJJ62FI6WJJ6WNI6mJH6mFJ6mJI62NH6WFI6mFI6mJH6WJI6mNH6mJI6mJI62JH62NI6WJI6mJI6mFJ62JI62JI6WJI6mJI6mNI6mJI6mFI6mNH6mJI6mJJ6mJJ6mJI6mJI6mJI6mJJ6mJI6mJI6mJI6mJI6mJI6mJI6WJI6mJI6mJI6mJI6mJIQkWPcAAAAGF0Uk5TAAECAwQGCAoNDxARExYXGhwdHyElJyssMjY5PD1CRUZKTFNWX2NkZmttbm9wdXZ3fX+Ag4WLjI6PkJWWmKChpqirrq+wsbm6u7y9vsLDx8/R09rf4+bo6uvx8vf4+fv9/gw7j64AAADtSURBVDjLY2DACtjFFDXNXQIiddElWIRlVU3s/cISocASRVbBKzguERVYoChwSMQAlgOpIDbIzUZf2RVTQXyIj52RiowAE1jEBk2Bs7wIK4oIugIj9HAb4gr41a2tVYRwK9CJAoVmjDYuBRqwAI/GroAvFldkQRUoJRJQoIlQYAgRkbP2dTeWgiuQRCiQB/HZHcHsBFMnqAJmP5h8IBuIbwtXD/OFYAiEHy4K4kkkYihg4DADKgm14gZztBAKDJBczMUDY+khFKgzYAPSCAXiWBUwecLknRiwA15/iLwfJw4FDMya3hFhHmqMWCUBQ6eAVhqL6ccAAAAASUVORK5CYII=" alt="" />

                                    <span style={textStyle}>Music</span>
                                </a>
                            </Col>
                            <Col xs={24} sm={12} md={6} lg={6}>
                                <a href="#" className="icon-list-block" style={iconBlockStyle}>
                                    <img src="data:image/png;base64,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" alt="" />
                                    <span style={textStyle}>Photography</span>
                                </a>
                            </Col>
                            <Col xs={24} sm={12} md={6} lg={6}>
                                <a href="#" className="icon-list-block" style={iconBlockStyle}>
                                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAA7AAAAOwBeShxvQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAARjSURBVFiFpZdrbFRVEMd/5+42QCt9iCYGpY1tMGCLUGOkjY1oa0QFMVaxSukCKlKfRDQhNSZW+IovNAaIkmA1KBISX9HaFtGYGPlClEA1tlVLBYzQbisVa+leP8xse3b37r3b9J/c3Xtn5vxn7pw5c84NkTmmA3cDy4HLgW7ggupmAPcAy4DZqhvLhNRk6LwM+Az4CTgGlALzgRXK8RHQaenmAXfo85QxDfgNqAeuBSpVXq/y3/Ue1ZXr8686dtLIBrYAXcC/wEmgVYlPAUst2y9VF8dS4DSwSHUnlaMLeBGZqgSEPJx3AHnAU8CzQAHwJ/KmrcDnlv1Z4HvgF33uRqbCALnAD8hUfAM8AGwA9jJROynYAnySJKvzkAEUA4/odaWH/lPgPg/ZC+mcg6TquiRZNjLXtZZsHTIdO/U6Day19PciNZCdxHU9E9nyxAiQ4yEvR9IH8uanSHzrZNkGpA6SkaM+UuAAjwGjwNV+ESIp3+Eh3wWsDxg7X308qj7lB3gVWA1UAccDSGaQvn+kVHkSOtVHBHg5LiwD+oBZwH7guQCSucBfSNrjKFFZScDYOGaqz9IQUqlnkOVWCjyNfxvtB4aBfRrEncB24Hlk7WeC/zTYHAfpBVnAW0pmF8kuDchGJVJknSuri6tXVhdXIy26EahIst2ErJKHkCVod8Ys9c0C4A8kAzYKVL7AklUgqbsdINoeORJtjxxR3TLVLbbsFyrHZcCHTExvAdIlS+OG25GOdgNwkf4fBl63yBzgaNy5BjAQbY8MWDbLgR9JLNI30nC/Yr+tUeEJ4DyS0ieTiG4CvtP7zQADbZHmgbZIsy1TZzeSiAeV87z6OIzHShpE9vJ0eALYpveuhz4uewl43IdnNhCNPziWIuhscAlwLsAG4G/g0gzsUgJoBxoyHTgFRNQXAGFL0QQc0vsWZB+vBd5G0juCNBAbVfr/rSWbBgzpvUGW4AHkSNcAbCS1RsZxBdJgBpHmNMTECagc2fW2MjHfzXqhsq1qs1BllcpxRjn3I500YzQiVZ2rz4uQQkwXwDbLea6Oje+ingj7KZEudhWyiXyMpPQuH/tVyFp3kQPr+0g3TQvHT6lEm4BbkSZ0fMWSolXpjGtriuqR3fSojnkG7yU7jqAMADD8xer+0bBTCNwPFOV//Y6n3e6mJQd3N9EL7M26EOvPue3dQO6gDBBta1g/GnZ6kE5XlEG8hcDm0bDTE+2IPDylAAbb1lZgzA5kCU0W03HZOXiwYbGfkW8AruNWedkYgwuEHAg7Mo0hlaXwx2LjvcIT/jUwFjuEY2LJQZQVX3yuq2/wgDGmCsB13WvmzskbRlZAAoMx7ld+LgK/DQfaI2sMvIl1xO4fGmFfRw/zivJxXfi5N0rdLcUUzEz4EvvHGLcxr6alZUoBAJxtXTcnFIptBLcO6ZZ+OIHLB2Phsddm3fxeXxB3pl/H44h2rClxDaWO6xa6+g1hYDhmTK9xOZZfs6d7Mnz/Azd2JfS6U9iIAAAAAElFTkSuQmCC" alt="" />
                                    <span style={textStyle}>Self Development</span>
                                </a>
                            </Col>
                        </Row>
                    </div>
                </section>

                <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '50px' }}>
                    <Card
                        style={{
                            width: 300,
                            margin: '20px',
                            backgroundImage: 'url(slider1.jpg)',
                            backgroundSize: 'cover',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px',
                        }}
                        hoverable // Enable hover effect
                    >
                        <div style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px' }}>
                            <h3><a href='https://www.w3schools.com/html/' target='blank'>HTML5 for beginners</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dicta at aliquam...</p>
                        </div>
                    </Card>
                    <Card
                        style={{
                            width: 300,
                            margin: '20px',
                            backgroundImage: 'url(slider2.jpg)',
                            backgroundSize: 'cover',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px',
                        }}
                        hoverable
                    >
                        <div style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px' }}>
                            <h3><a href='https://www.w3schools.com/css/' target='blank'>Advance CSS3 animations</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dicta at aliquam...</p>
                        </div>
                    </Card>
                    <Card
                        style={{
                            width: 300,
                            margin: '20px',
                            backgroundImage: 'url(slider3.jpg)',
                            backgroundSize: 'cover',
                            transition: 'transform 0.3s, box-shadow 0.3s',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
                            borderRadius: '8px',
                        }}
                        hoverable
                    >
                        <div style={{ textAlign: 'center', padding: '40px 20px', backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px' }}>
                            <h3><a href='https://www.w3schools.com/js/' target='blank'>Core Javascript basics</a></h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam dicta at aliquam...</p>
                        </div>
                    </Card>
                </div>
                <section style={{ backgroundColor: 'rgb(248, 249, 250)', height: '240px', marginTop: '80px' }} >
                    <div style={{ paddingRight: '15px', paddingLeft: '15px', marginRight: 'auto', marginLeft: 'auto' }}>
                        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center' }}>
                            <li style={{ borderRight: '2px solid #e0e4e6', textAlign: 'center', marginLeft: '2px', padding: '25px', marginTop: '50px' }}>
                                <span style={{ fontSize: '48px', fontWeight: 'bold', lineHeight: '46px', color: '#0c2e60'}}>221</span>
                                <p style={{ marginTop: "8px", color: '#000', fontSize: '14px', textTransform: 'uppercase', letterSpacing: "1.4px"}}>Amazing Course</p>
                            </li>
                            <li style={{ borderRight: '2px solid #e0e4e6', textAlign: 'center', marginLeft: '2px', padding: '25px', marginTop: '50px' }}>
                                <span style={{ fontSize: '48px', fontWeight: 'bold', lineHeight: '46px', color: '#0c2e60' }}>20</span>
                                <p style={{ marginTop: "8px", color: '#000', fontSize: '14px', textTransform: 'uppercase', letterSpacing: "1.4px" }}>TALENTED INSTRUCTORS</p>
                            </li>
                            <li style={{ borderRight: '2px solid #e0e4e6', textAlign: 'center', marginLeft: '20px',marginRight:'0px', padding: '25px', marginTop: '50px' }}>
                                <span style={{ fontSize: '48px', fontWeight: 'bold', lineHeight: '46px', color: '#0c2e60' }}>4120</span>
                                <p style={{ marginTop: "8px", color: '#000', fontSize: '14px', textTransform: 'uppercase', letterSpacing: "1.4px" }}>SKILLED STUDENTS</p>
                            </li>
                            <li style={{ textAlign: 'center', marginLeft: '20px', padding: '25px', marginTop: '50px' }}>
                                <span style={{ fontSize: '48px', fontWeight: 'bold', lineHeight: '46px', color: '#0c2e60' }}>14</span>
                                <p style={{ marginTop: "8px", color: '#000', fontSize: '14px', textTransform: 'uppercase', letterSpacing: "1.4px" }}>CATEGORIES</p>
                            </li>
                        </ul>
                    </div>  
                </section>


            </div>


            <Footer style={{ textAlign: 'center', padding: '20px', marginTop: '100px' }}>


                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                    <div>
                        <h3 style={{ textAlign: 'left', marginLeft: '20px' }}>Information For</h3>
                        <ul style={{ listStyleType: 'none', padding: 20, textAlign: 'left' }}>
                            <li style={{ cursor: 'pointer', marginBottom: '8px' }}>Prospective undergraduates</li>
                            <li style={{ cursor: 'pointer', marginBottom: '8px' }}>Prospective graduate students</li>
                            <li style={{ cursor: 'pointer', marginBottom: '8px' }}>Businesses/Partnerships</li>
                            <li style={{ cursor: 'pointer', marginBottom: '8px' }}>Visitors/Tourists</li>
                            <li style={{ cursor: 'pointer', marginBottom: '8px' }}>Parliamentarians</li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ textAlign: 'left', marginLeft: '20px' }}>Quick Links</h3>
                        <ul style={{ listStyleType: 'none', padding: 20, textAlign: 'left' }}>
                            <li style={{ cursor: 'pointer', marginBottom: '8px' }}>Contact Searches</li>
                            <li style={{ cursor: 'pointer', marginBottom: '8px' }}>Jobs and Vacancies</li>
                            <li style={{ cursor: 'pointer', marginBottom: '8px' }}>University images</li>
                            <li style={{ cursor: 'pointer', marginBottom: '8px' }}>Privacy Policy</li>
                            <li style={{ cursor: 'pointer', marginBottom: '8px' }}>Terms and Conditions</li>
                        </ul>
                    </div>
                    <div>
                        <h3 style={{ textAlign: 'left', marginLeft: '20px' }}>Security Brand</h3>
                        <ul style={{ listStyleType: 'none', padding: 20, textAlign: 'left' }}>
                            <li style={{ cursor: 'pointer', marginBottom: '8px' }}>Privacy Statement</li>
                            <li style={{ cursor: 'pointer', marginBottom: '8px' }}>Report Copyright Infringement</li>
                            <li style={{ cursor: 'pointer', marginBottom: '8px' }}>Report Security Issue</li>
                            <li style={{ cursor: 'pointer', marginBottom: '8px' }}>Trademark Notice</li>
                            <li style={{ cursor: 'pointer', marginBottom: '8px' }}>Access Control</li>
                        </ul>
                    </div>
                </div>





                <hr />
                <div style={{ backgroundColor: "white", height: "60px", display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <p style={{ margin: 0 }}>COPYRIGHT © 2024 <a href="#">Agiitize.com</a> ALL RIGHTS RESERVED.</p>
                </div>

            </Footer>
        </>
    );
};

export default HeaderComponent;





























// import React from 'react';

// const HomePage = () => {
//     return (
//         <div style={styles.container}>
//             <h1 style={styles.heading}>Welcome to Student Registration</h1>
//             <p style={styles.paragraph}>
//                 Thank you for choosing our platform to register as a student. We are dedicated to providing you with the best experience possible.
//             </p>
//             <p style={styles.paragraph}>
//                 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//             </p>
//             <button style={styles.button}>Get Started</button>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         textAlign: 'center',
//         margin: '50px auto',
//         maxWidth: 600,
//     },
//     heading: {
//         fontSize: 32,
//         fontWeight: 'bold',
//         marginBottom: 20,
//     },
//     paragraph: {
//         fontSize: 18,
//         marginBottom: 15,
//     },
//     button: {
//         padding: '10px 20px',
//         fontSize: 18,
//         fontWeight: 'bold',
//         backgroundColor: '#007bff',
//         color: '#fff',
//         border: 'none',
//         borderRadius: 5,
//         cursor: 'pointer',
//         textDecoration: 'none',
//         transition: 'background-color 0.3s',
//     },
// };

// export default HomePage;
