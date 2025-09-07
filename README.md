# Tic Tac Toe Game

A simple web-based Tic Tac Toe game built with HTML, CSS, and JavaScript.

## Features
- Classic 3x3 Tic Tac Toe gameplay
- Interactive UI with sound effects for moves, wins, and draws
- Responsive design for desktop and mobile
- Audio feedback for game events (win, draw, click, background music)

## How to Play
1. Open `tictaktoe.html` in your web browser.
2. Player 1 (X) and Player 2 (O) take turns clicking on the grid to place their marks.
3. The first player to align three marks horizontally, vertically, or diagonally wins.
4. If all cells are filled and no player has won, the game ends in a draw.

## File Structure
- `tictaktoe.html` - Main HTML file for the game UI
- `main.js` - JavaScript logic for game functionality
- `style.css` - CSS styles for the game
- `spirits/` - Folder containing sound effects:
  - `bgm.mp3` - Background music
  - `click.mp3` - Sound for each move
  - `draw.mp3` - Sound for a draw
  - `win.mp3` - Sound for a win

## Customization
- You can replace the audio files in the `spirits/` folder with your own sounds.
- Modify `style.css` to change the appearance of the game.

## License

This project is licensed under the [MIT License](LICENSE).
