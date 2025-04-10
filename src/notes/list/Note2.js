import React, { useState } from "react";
import style from "../css/ApiPractice.module.css"

export default function ApiPractice() {
    const [userID, userIDSetter] = useState(1);
    const [user, userSetter] = useState('');
    const [title, titleSetter] = useState('');
    const [content, contentSetter] = useState('');
    const [error, setError] = useState('');
    const [response, setResponse] = useState('');

    const handleGetUser = () => {
        fetch('https://jsonplaceholder.typicode.com/users/'+userID).then(
            (res)=>{
                if(!res.ok) throw new Error('no user')
                return(res.json());}).then(
            (user)=>{
                userSetter(user);
                console.log(user);
            }).catch(
            (error)=>{
                setError(error.message);
                console.log(error);
            })
    }

    const handlePostBlog = () => {
        fetch('https://jsonplaceholder.typicode.com/posts/',{
            method: "POST",
            headers: {
                "Content-type": 'application/json; charset=UTF-8'
            },
            body:JSON.stringify({
                title: title,
                body:content,
                userID:1
            })
        }).then(
            (res)=>{
                return(res.json());}).then(
            (data)=>{
                console.log(data);
                setResponse(data);
            }).catch(
            (error)=>{
                setError(error.message);
                console.log(error);
            })
        
    }
    

    return <div className={style.container}>
        <h1 className={style.heading}>API 연습</h1>
        <div className={style.section}>
            <input 
                className={style.input} 
                type='number' 
                min='1' 
                max='10'
                value={userID}
                onChange={(e)=>{userIDSetter(e.target.value)}}
                placeholder='User ID 1~10'
            />
            <button className={style.button} onClick={handleGetUser}>
                유저정보 GET
            </button>
            <div className={style.card}>
                <p>
                    <strong>유저 이름: </strong> {user.name}
                </p>
                <p>
                    <strong>유저 이메일: </strong> {user.email}
                </p>
                <p>
                    <strong>유저 전화번호: </strong> {user.phone}
                </p>
            </div>
        </div>
        <hr/>
        <div className={style.section}>
            <input 
                className={style.input} 
                type='text' 
                placeholder='게시글 제목'
                value={title}
                onChange={(e)=>{titleSetter(e.target.value)}} 
            />
            <textarea 
                className={style.textarea} 
                placeholder="게시글 내용" 
                rows="4"
                value={content}
                onChange={(e)=>{contentSetter(e.target.value)}} 
            />
            <button className={style.button} onClick={handlePostBlog}>
                게시글 작성하기 POST
            </button>
        </div>
        {response &&
        <div className={style.success+" "+style.response}>
            게시글이 생성되었습니다: {response.id}
        </div>}

        {error &&
        <div className={style.error+" "+style.response}>
            오류: {error}
        </div>}
    </div>
}