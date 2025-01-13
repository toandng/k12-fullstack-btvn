setTimeout (function () {
    console.log("alo");
    
},10000)
/**
 * Xây dựng đồng hộ countdown đếm ngược đến tết dương lịch 2026
 *
 */
setInterval(function () {
    const now = new Date();
    const newYear2026 = new Date("2026-01-01T00:00:00");
    const timeDriff = (newYear2026 - now);

    if(timeDriff <=0 ) {
        clearInterval(this)
        return ;        
    }
    const day = Math.floor(timeDriff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDriff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDriff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDriff % (1000 * 60)) / 1000);
    // console.log(`Còn ${day} ngày, ${hours} giờ, ${minutes} phút, ${seconds} giây đến Tết Dương lịch 2026.`);
    let content = `Ngay ${day} Gio ${hours} phut ${minutes} Giay ${seconds}`
    document.write(content);
    document.close();
},1000);

  


