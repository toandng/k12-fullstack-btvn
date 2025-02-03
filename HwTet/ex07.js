let operation = null;

function selectOperation(op) {
    operation = op;
}

function calculate() {
    const num1 = document.getElementById('number1').value;
    const num2 = document.getElementById('number2').value;
    const resultElement = document.getElementById('result');

    if (num1 === '' || num2 === '') {
        resultElement.textContent = 'Vui lòng nhập đầy đủ hai số.';
        return;
    }

    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (!operation) {
        resultElement.textContent = 'Vui lòng chọn phép tính.';
        return;
    }

    let result;
    switch (operation) {
        case '+':
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            if (number2 === 0) {
                resultElement.textContent = 'Lỗi: Không thể chia cho 0.';
                return;
            }
            result = number1 / number2;
            break;
        default:
            resultElement.textContent = 'Lỗi: Phép tính không hợp lệ.';
            return;
    }

    resultElement.textContent = `Kết quả: ${result}`;
}