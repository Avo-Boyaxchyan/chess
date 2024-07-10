const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let letters = 'ABCDEFGH';

for(let i = 0; i < 8; i++) {
    ctx.fillStyle = 'white';
    ctx.font = '30px tahoma';
    ctx.fillText(8 - i, 410, 90 + 62*i);
    ctx.fillText(letters[i], 470 + 62*i, 30);
    for(let j = 0; j < 8; j++) {
        ctx.fillStyle = (i+j) % 2 == 0 ? 'white' : 'mediumpurple';
        ctx.fillRect(450 + 62*j, 50 + 62*i, 60, 60);
    }
}

document.getElementById('knight').addEventListener('click', () => {
    let code = prompt('Input step knight:');
    const pattern = /^[A-H][1-8]$/;
    if(!pattern.test(code)) {
        return alert('error');
    }
    let [x, y] = [...code];
    y = 8 - y;
    x = letters.indexOf(x);
    let img = new Image();
    img.src = 'https://cdn1.iconfinder.com/data/icons/business-and-finance-293/512/strategy_planning_knight_chess_horse_business-256.png';
    img.onload = () => {
        ctx.drawImage(img, 450 + 62*x, 50 + 62*y, 60, 60);
    };
    [
       [x + 1, y - 2],
       [x + 1, y + 2],
       [x + 2, y - 1],
       [x + 2, y + 1],
       [x - 1, y - 2],
       [x - 1, y + 2],
       [x - 2, y - 1],
       [x - 2, y + 1],
    ].filter(([x, y]) => x >= 0 && y >= 0 && x < 8 && y < 8)
       .forEach(([x, y]) => {
        ctx.fillStyle = 'yellow';
        ctx.fillRect(450 + 62*x, 50 + 62*y, 60, 60);
    })
})

document.getElementById('boat').addEventListener('click', () => {
    let code = prompt('Input step boat:');
    const pattern = /^[A-H][1-8]$/;
    if(!pattern.test(code)) {
        return alert('error');
    }
    let [x, y] = [...code];
    y = 8 - y;
    x = letters.indexOf(x);
    let img = new Image();
    img.src = 'https://cdn2.iconfinder.com/data/icons/seo-flat-6/128/04_Business_Strategy-256.png';
    img.onload = () => {
        ctx.drawImage(img, 450 + 62*x, 50 + 62*y, 60, 60);
    };
    for(let i = 0; i < 8; i++) {
        if (i !== y) {
            ctx.fillStyle = 'lightblue';
            ctx.fillRect(450 + 62 * x, 50 + 62 * i, 60, 60);
        }
        if (i !== x) {
            ctx.fillStyle = 'lightblue';
            ctx.fillRect(450 + 62 * i, 50 + 62 * y, 60, 60);
        }
    }
})

document.getElementById('elephant').addEventListener('click', () => {
    let code = prompt('Input step elephant:');
    const pattern = /^[A-H][1-8]$/;
    if(!pattern.test(code)) {
        return alert('error');
    }
    let [x, y] = [...code];
    y = 8 - y;
    x = letters.indexOf(x);
    let img = new Image();
    img.src = 'https://cdn3.iconfinder.com/data/icons/chess-game-1/500/chess_05-512.png';
    img.onload = () => {
        ctx.drawImage(img, 450 + 62*x, 50 + 62*y, 60, 60);
    };
    for (let i = 1; i < 8; i++) {
        if (x + i < 8 && y + i < 8) {
            ctx.fillStyle = 'green';
            ctx.fillRect(450 + 62 * (x + i), 50 + 62 * (y + i), 60, 60);
        }
        if (x - i >= 0 && y - i >= 0) {
            ctx.fillStyle = 'green';
            ctx.fillRect(450 + 62 * (x - i), 50 + 62 * (y - i), 60, 60);
        }
        if (x + i < 8 && y - i >= 0) {
            ctx.fillStyle = 'green';
            ctx.fillRect(450 + 62 * (x + i), 50 + 62 * (y - i), 60, 60);
        }
        if (x - i >= 0 && y + i < 8) {
            ctx.fillStyle = 'green';
            ctx.fillRect(450 + 62 * (x - i), 50 + 62 * (y + i), 60, 60);
        }
    }
})

document.getElementById('king').addEventListener('click', () => {
    let code = prompt('Input step king:');
    const pattern = /^[A-H][1-8]$/;
    if(!pattern.test(code)) {
        return alert('error');
    }
    let [x, y] = [...code];
    y = 8 - y;
    x = letters.indexOf(x);
    let img = new Image();
    img.src = 'https://cdn4.iconfinder.com/data/icons/sport-117/64/Chess-strategy-fight-queen-king-512.png';
    img.onload = () => {
        ctx.drawImage(img, 450 + 62*x, 50 + 62*y, 60, 60);
    };
    [
        [x, y + 1],
        [x, y - 1],
        [x + 1, y],
        [x - 1, y],
        [x + 1, y + 1],
        [x - 1, y - 1],
        [x + 1, y - 1],
        [x - 1, y + 1]
    ].filter(([x, y]) => x >= 0 && y >= 0 && x < 8 && y < 8)
        .forEach(([x, y]) => {
            ctx.fillStyle = 'gold';
            ctx.fillRect(450 + 62 * x, 50 + 62 * y, 60, 60);
        });
});