import React from 'react';
import logo from './logo.svg';
import './App.css';
import {  useState, useEffect, useCallback, memo } from "react";
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function App() {
  const [start, setStart] = useState(false);
  const [index, setIndex] = useState(0);

  const rouletteContents = [
    "カレー",
    "パスタ",
    "唐揚げ",
    "天ぷら",
    "中華",
    "ハンバーグ",
    "うどん",
    "肉じゃが"
  ];

  //ボタンの文言を変更する処理
  const startRoulette = useCallback(() => {
    setStart(!start);
  }, [start]);

  //ルーレットを回す処理
  useEffect(() => {
    if (start) {
      const interval = setInterval(() => {
        setIndex((oldIndex) => {
          if (oldIndex < rouletteContents.length - 1) return oldIndex + 1;
          return 0;
        });
      }, 50);//ルーレットの中身を切り替える速度
      return () => clearInterval(interval);
    } else if (!start) {
      return () => clearInterval(undefined);
    }
  }, [start]);

  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container alignItems='center' justifyContent='center' direction="column">
        <p>今日のメニューは</p>
        <p>{rouletteContents[index]}</p>
        <Button variant="contained" onClick={startRoulette}>
          {start ? "ストップ" : "スタート"}
        </Button>
      </Grid>
    </Box>
    </>
  );
}

export default App;
