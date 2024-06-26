import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Typography, Button, CircularProgress, Grid, TextField, MenuItem, Paper } from '@mui/material';
import { setBetAmount, setSelectedOption, setResult, setLoading } from './redux/gameReducer';
import axios from 'axios';

const Game = () => {
  const { betAmount, betType, result, loading } = useSelector(state => state.game);
  const dispatch = useDispatch();
  const [winningAmount, setWinningAmount] = useState(null);
  const [points, setPoints] = useState(5000); // Initial points

  useEffect(() => {
    if (result) {
      setWinningAmount(result.winAmount);
      setPoints(prevPoints => prevPoints + result.winAmount);
    }
  }, [result]);

  const handleRollDice = async () => {
    dispatch(setLoading(true));
    try {
      const response = await axios.post('https://sevenup7down-assignment-1.onrender.com', {
        betAmount,
        betType
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      console.log(response);
      dispatch(setResult(response.data));
    } catch (error) {
      console.error('Error rolling dice:', error);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleBetAmount = (amount) => {
    dispatch(setBetAmount(amount));
    setWinningAmount(null);
  };

  const handleBetTypeChange = (event) => {
    dispatch(setSelectedOption(event.target.value));
    setWinningAmount(null);
  };

  const allowedBetAmounts = [100, 200, 500];
  const betTypes = [
    { value: '7down', label: '7 Down' },
    { value: 'seven', label: 'Lucky 7' },
    { value: '7up', label: '7 Up' }
  ];

  return (
    <Container style={{ padding: '10px' }}>
      <Typography variant="h4" align="center" gutterBottom>
        7 UP 7 DOWN Game
      </Typography>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h6">Current Points:</Typography>
        <Typography variant="body1">{points}</Typography>
      </Paper>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Typography variant="h6">Selected Bet Amount:</Typography>
        <Typography variant="body1">{betAmount}</Typography>
        <Grid container spacing={2} justifyContent="center">
          {allowedBetAmounts.map((amount) => (
            <Grid item key={amount}>
              <Button
                fullWidth
                variant="contained"
                color="primary"
                onClick={() => handleBetAmount(amount)}
                style={{ marginBottom: '10px' }}
              >
                Bet {amount}
              </Button>
            </Grid>
          ))}
        </Grid>
      </Paper>
      <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px' }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} sm={6}>
            <TextField
              select
              label="Bet Option"
              value={betType}
              onChange={handleBetTypeChange}
              fullWidth
              margin="normal"
            >
              {betTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} sm={6} style={{ display: 'flex', alignItems: 'center' }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={handleRollDice}
              disabled={loading}
              style={{ marginTop: '10px', padding: '10px' }}
            >
              {loading ? <CircularProgress size={24} /> : 'Roll Dice'}
            </Button>
          </Grid>
        </Grid>
        <Typography variant="h6" align="center" style={{ marginTop: '10px' }}>
          Winning/Losing Amount: {winningAmount !== null ? winningAmount : '-'}
        </Typography>
      </Paper>
      {result && (
        <Paper elevation={3} style={{ padding: '20px', marginBottom: '20px', textAlign: 'center' }}>
          <Typography variant="h6">Result:</Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={12}>
              <Typography variant="body1" style={{ fontSize: '18px', fontWeight: 'bold' }}>{`Dice 1: ${result.dice1}`}</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="body1" style={{ fontSize: '18px', fontWeight: 'bold' }}>{`Dice 2: ${result.dice2}`}</Typography>
            </Grid>
            <Grid item xs={12} sm={12}>
              <Typography variant="body1" style={{ fontSize: '18px', fontWeight: 'bold' }}>{`Total: ${result.total}`}</Typography>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Container>
  );
};

export default Game;
