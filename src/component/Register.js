import React from "react";
import "./Register.css"

function Register() {
    return (
        <div class="container mt-5 pt-5">
            <div class="col-lg-3 pt-2">
                <h1>회원가입</h1>
            </div>
            <div class="row">
                <table class="table table-boardered">
                    <tr>
                        <th>아이디</th>
                        <td colspan="2">
                            <input
                                class="form-control"
                                type="text"
                                id="id"
                                maxlength="20"
                                placeholder="아이디를 입력해주세요."></input>
                        </td>
                        <td class="checkRepeat">
                            <button class="btn btn-primary" type="button">중복체크</button>
                        </td>
                    </tr>
                    <tr>
                        <th>비밀번호</th>
                        <td colspan="3">
                            <input
                                class="form-control"
                                type="password"
                                id="pass1"
                                placeholder="비밀번호를 입력해주세요."></input>
                        </td>
                    </tr>
                    <tr>
                        <th>비밀번호 확인</th>
                        <td colspan="3">
                            <input
                                class="form-control"
                                type="password"
                                id="pass2"
                                placeholder="비밀번호를 다시 입력해주세요."></input>
                        </td>
                    </tr>
                    <tr>
                        <th>이름</th>
                        <td colspan="3">
                            <input class="form-control" type="text" id="username" placeholder="이름을 입력해주세요."></input>
                        </td>
                    </tr>
                    <tr>
                        <th>이메일</th>
                        <td colspan="3">
                            <input
                                class="form-control"
                                type="email"
                                id="useremail"
                                placeholder="admin@email.com"></input>
                        </td>
                    </tr>
                    <tr>
                        <th>우편번호</th>
                        <td colspan="2">
                            <input class="form-control" type="text" id="zip"></input>
                        </td>
                        <td>
                            <button class="btn btn-primary" type="button">우편번호 찾기</button>
                        </td>
                    </tr>
                    <tr>
                        <th>주소</th>
                        <td colspan="3">
                            <input class="form-control" type="text" id="add" placeholder="도/시/군 상세주소"></input>
                        </td>
                    </tr>
                    <tr>
                        <th>휴대번호</th>
                        <td colspan="3">
                            <input class="form-control" type="text" id="phone" placeholder="000-0000-0000"></input>
                        </td>
                    </tr>
                    <tr>
                        <th>사용자</th>
                        <td colspan="3">
                            <input type="radio" name="1"></input>
                            <label class="pl-2 pr-4">점주</label>
                            <input type="radio" name="2"></input>
                            <label class="pl-2 pr-4">배달원</label>
                            <input type="radio" name="3"></input>
                            <label class="pl-2 pr-4">손님</label>
                        </td>
                    </tr>
                    <tr>
                        <td class="align-self-center m-0 px-0" colspan="5">
                            <input class="btn btn-primary pull-right mr-3" type="submit" value="회원가입"></input>
                            <input class="btn btn-warning pull-right" type="submit" value="취소"></input>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Register;