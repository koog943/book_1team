import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button, TextField, Grid, Paper, Typography, Snackbar, Text } from '@mui/material';
import axios from 'axios';
import APIConfig from "./APIConfig";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    userName: '이름123',
    userMoney: 200,
    userSubscribeStatus: '비구독자'
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/bookflix/user');
        setFormData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('API 요청 오류:', error);
      }
    };

    // fetchData 함수 호출
    fetchData();
  }, []);

  const [showAlert, setShowAlert] = useState(false);
  const [btnDisabled, setBtnDisabled] = useState(false);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    })); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setBtnDisabled(true)
      await axios.post(`${APIConfig.url}/subscribe`, formData);
      setShowAlert(true); // 회원가입 완료 알람 표시
    } catch (error) {
      console.error('구독 오류:', error);
    }
  };

  const handleSubmitSubscribe = async (event) => {
    event.preventDefault();

    try {
      setBtnDisabled(true)
      await axios.post(`${APIConfig.url}/subscribe/${formData.userId}`, formData);
      setShowAlert(true); // 회원가입 완료 알람 표시
    } catch (error) {
      console.error('구독 오류:', error);
    }
  };

  const handleSubmitID = async (event) => {
    event.preventDefault();

    try {
      setBtnDisabled(true)
      await axios.post(`${APIConfig.url}/changeID/${formData.userId}`, formData);
      setShowAlert(true); // 회원가입 완료 알람 표시
    } catch (error) {
      console.error('구독 오류:', error);
    }
  };

  const handleSubmitPW = async (event) => {
    event.preventDefault();

    try {
      setBtnDisabled(true)
      await axios.post(`${APIConfig.url}/changeID/${formData.userId}`, formData);
      setShowAlert(true); // 회원가입 완료 알람 표시
    } catch (error) {
      console.error('구독 오류:', error);
    }
  };


  const handleAlertClose = () => {
    setShowAlert(false); // 알람 닫기
  };

  return (
    
    
    <Grid container justifyContent="center" alignItems="center" style={{ minHeight: '100vh' }}>
      <Grid item xs={10} sm={6} md={4}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h5" align="center" gutterBottom>
            회원정보
          </Typography>

          <form onSubmit={handleSubmitID}>
            </form>
            <TextField
              label="userName"
              fullWidth
              name="userName"
              value={formData.userName}
              margin="normal"
              required
              InputProps={{
                endAdornment: (
                <Button disabled={btnDisabled} type="submit" variant="contained" color="primary" style={{ marginTop: '15px', marginLeft: '15px'  }}>
                  Name수정
                </Button>
                ),
              }}
            />
            <TextField
              label="userMoney"
              fullWidth
              name="userMoney"
              value={formData.userMoney}
              margin="normal"
              required
              InputProps={{
                endAdornment: (
                <Button disabled={btnDisabled} type="submit" variant="contained" color="primary" style={{ marginTop: '15px', marginLeft: '15px'  }}>
                  금액추가
                </Button>
                ),
              }}
            />
            <TextField
              label="userSubscribeStatus"
              fullWidth
              name="userSubscribeStatus"
              value={formData.userSubscribeStatus}
              margin="normal"
              required
            />
            <form onSubmit={handleSubmitSubscribe}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
              <Button disabled={btnDisabled} type="submit" variant="contained" color="primary" style={{ marginTop: '15px', marginLeft: '15px'  }}>
                구독하기
              </Button>
              <Button component={Link} to="/" variant="outlined" style={{ marginTop: '15px', marginLeft: '15px' }}>
                취소
              </Button>
            </div>
            </form>
        </Paper>
      </Grid>
      <Snackbar
        open={showAlert}
        autoHideDuration={1500}
        onClose={handleAlertClose}
        message= "구독완료" //응답데이터를 넣어준다
      />
    </Grid>
  );
};

export default Signup;
