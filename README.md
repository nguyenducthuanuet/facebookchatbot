# Hướng dẫn cài đặt cơ bản cho Web Service sử dụng cho Facebook Chatbot

## I. Các công cụ cần cài đặt (trên cả Linux và Windows)

1. [NodeJS](https://nodejs.org/en/) ver8 or ver6 (nếu ai muốn sử dụng ES7 thì cài ver8, còn nếu muốn chỉ sử dụng ES6 thì cài ver6 là đủ rồi. Project có config để sử dụng cả ES6 và ES7).
2. [pm2](https://github.com/Unitech/pm2) ( giờ chưa cần nhưng sau này cần, nếu chưa cài được thì có thể tạm bỏ qua)
3. [Ngrok](https://ngrok.com/download) - hiểu đơn giản thì đây là một reserve proxy dùng để bỏ qua cơ chế NAT của router để người khác có thể truy cập vào localhost thông qua internet.
4. Mỗi người tự lập cho mình một fanpage để test các chức năng trên fanpage này.

## II. Các bước cài đặt
*Tổng quan quy trình là như này:
   Chúng ta tương tác với người dùng Facebook thông qua một fanpage trung gian. Người dùng gửi tin nhắn đến fanpage này, rồi thông qua api kết nối, tin nhắn sẽ được đẩy đến web service của chúng ta (theo tìm hiểu thì Facebook dùng cơ chế long-polling 40s)*
- Chính vì vậy mỗi người cần lập một fanpage có kết nối với web service qua API
- Tiếp theo để Facebook có thể gửi tin nhắn đến thì mình cần phải đưa web service của mình lên mạng internet và có yêu cầu cài đặt SSL, Ngrok sẽ giúp mình làm điều này.
- Phần còn lại là tìm hiểu các message truyền về, phân tích xử lý rồi đưa ra phản hồi phù hợp.

### 1. Clone project về và chạy `npm install` để cài đặt các package cần thiết
Tớ cũng mới học nodejs, tập tành về express thôi nên cấu trúc project có thể chưa chuẩn, mọi người  cùng nghiên cứu, muốn thay đổi cấu trúc project cũng được :3 miễn là giải thích cho mn cùng hiểu.

### 2. Kết nối Fanpage với Web Service
1. Truy cập vào [Facebook Developer](https://developers.facebook.com/). Sau đó kích vào nút bắt đầu ở phía trên bên phải để tạo cho mình một ứng dụng.
<img src = "https://i.imgur.com/CxCpMQt.png">

2. Chọn Ứng dụng messenger
<img src = "https://i.imgur.com/6fHCKLf.png">

3. Tạo token cho fanpage. Kéo xuống chọn phần Tạo mã và chọn fanpage cần tạo mã. Nó sẽ sinh cho mình 1 mã, copy mã này. 
<img src = "https://i.imgur.com/Q1j9QcA.png">

Sau đó mở project của mình lên, vào file /src/config/page_token.js và dán đoạn mã này vào chỗ *page_token*
<img src = "https://i.imgur.com/F6lGOyW.png">

4. Kéo xuống dưới chọn phần thiết lập webhook,
<img src = "https://i.imgur.com/xSMD3cb.png">

5. Có một hộp thoại hiện lên, cứ để đấy. Nó yêu cầu nhập một URL gọi lại, lúc này ta cần bật server localhost lên và chạy Ngrok.
Vào project chạy `npm start`, vào thư mục đã download ngrok, khởi chạy bằng cách: `./ngrok http 3000`. Ta được như sau:
<img src = "https://i.imgur.com/7G0gUHP.png">

Copy Forwarding https: ví dụ ở đây là `https://58157de6.ngrok.io`. 
- Quay lại với thiết lập webhook, chúng ta dán `https://58157de6.ngrok.io/webhook` vào trường URL gọi lại
- Trường mã xác minh nhập `verify_token`.
- Trường gửi chọn *messages* và *messaging_postbacks*
<img src = "https://i.imgur.com/cGF7ra6.png">
Đến đây, việc cài đặt đã xong, dùng nick của chính mình để gửi tin nhắn bất kỳ đến cái fanpage vừa tạo. Nếu nhận được message phản hồi y hệt, 1 cái mặt cười thì là thành công.

**So easy nhỉ :v**
