function calculateBill() {
    const totalBill = parseFloat(document.getElementById('total-bill').value);
    const numberOfPeople = parseInt(document.getElementById('number-of-people').value);
    const tipAmount = parseFloat(document.getElementById('tip-amount').value);
    const resultElement = document.getElementById('result');

    
    resultElement.textContent = '';
    resultElement.className = 'result';

    if (isNaN(totalBill) || totalBill <= 0) {
        resultElement.textContent = 'Lỗi: Tổng bill phải lớn hơn 0.';
        resultElement.className = 'error';
        return;
    }

    if (isNaN(numberOfPeople) || numberOfPeople <= 0 || !Number.isInteger(numberOfPeople)) {
        resultElement.textContent = 'Lỗi: Số người chia bill phải là số nguyên lớn hơn 0.';
        resultElement.className = 'error';
        return;
    }

    if (isNaN(tipAmount) || tipAmount < 0 || tipAmount > totalBill) {
        resultElement.textContent = 'Lỗi: Tiền tip phải lớn hơn hoặc bằng 0 và không vượt quá tổng bill.';
        resultElement.className = 'error';
        return;
    }

    const totalToPay = totalBill + tipAmount;
    const amountPerPerson = totalToPay / numberOfPeople;
    
    resultElement.textContent = `Tổng số tiền cần trả: ${totalToPay.toLocaleString()} VNĐ. Mỗi người cần trả: ${amountPerPerson.toLocaleString()} VNĐ.`;
}