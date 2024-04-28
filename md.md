# Danh sách lệnh
- [Cash](#Cash)
- [Administrator](#administrator)
- [Moderation](#moderation)
- [Supporter](#supporter)
- [Player](#Player)
- [Khách](#khách)
- [Marry](#marry)

- [Setup](#setup)
- [Autoresponder](#autoresponder)
- [Welcome](#welcome)
- [Ticket](#ticket)
- [Shop](#shop)
- [Embed](#embed)

# Administrator
- Nhập nhanh số tiền : 10k = 10 000 VNĐ - 1m = 1 000 000 VNĐ.
```
addtime - cộng giờ cho khách
at <@user> <số giờ>

subtime - trừ giờ của khách
st <@user> <số giờ>

addluong - cộng tiền thưởng cho player
dal <@user> <số tiền>

subluong - trừ tiền của player ( tiền phạt )
dsl <@user> <số tiền>

tongluong - hiển thị bảng lương của tất cả player đang có role players
```
Quay trở lại [Danh sách lệnh](#danh-sách-lệnh)

# Cash
- Nhập nhanh số tiền : 10k = 10 000 VNĐ - 1m = 1 000 000 VNĐ.
- Cần role cash để sử dụng các lệnh này
```
addcash - cộng tiền vnd cho khách
ac <@user> <số tiền>

subcash - trừ tiền vnd của khách
sc <@user> <số tiền>
```
Quay trở lại [Danh sách lệnh](#danh-sách-lệnh)

# Moderation
```
Administrator : ban, mute, unmute, unban
Supporter : role, purge
```
Quay trở lại [Danh sách lệnh](#danh-sách-lệnh)

# Supporter
- Nhập nhanh số tiền : 10k = 10 000 VNĐ - 1m = 1 000 000 VNĐ.
```
book - lên bill cho khách và player

hoanbill - hoàn bill của khách và player trước đó 

donate - lên bill donate cho khách và player

hoandonate - hoàn bill donate của khách và player trước đó

reset-bill - xoá tất cả bill hiện có của server hoặc của người nào đó

react < tiêu đề react bill > - hiển thị bảng để player có thể react để nhận bill

topno - hiển thị tất cả member đang nợ tiền

topcash - hiển thị tất cả member đang có số tiền cash trong server

topbuy - hiện thị bảng tổng số các món đồ đã bán được
```
Quay trở lại [Danh sách lệnh](#danh-sách-lệnh)

# Setup
```
/set log-commnads - set nhật ký của tất cả lệnh bot 

/set log-cash - set nhật ký của tiền cash trong server

/set log-bills - set nhật ký của tất cả các bill trong server

/set log-shop - set nhật ký của shop

/set log-reset - set nhật ký reset

/set server - cập nhật giá book, luong, phí về server, phí 1 người

Lưu ý:
- setting: giá book, luong chỉ thay đổi hiển thị giá book và lương,
nếu set lại về giá khác sẽ hiện giá khác. Còn chi phí về server,
về 1 người sẽ trừ theo giá lúc đó.
```
Quay trở lại [Danh sách lệnh](#danh-sách-lệnh)

# Autoresponder
```
ar add/a <tên> | <tin nhắn> ( tạo auto responder )

ar content <tên đã add> | <tin nhắn>

ar title <tên đã add> | <tiêu đề trên embed>

ar description <tên đã add> | <tin nhắn trong embed>

ar turl <tên đã add> | <link ảnh> ( ảnh nhỏ trong embed )

ar iurl <tên đã add> | <link ảnh> ( ảnh to trong embed )

ar color <tên đã add> | <mã màu> ( lấy mã màu tại color-hex.com và nhớ bỏ # ở đầu )
ar color test | 0xFFFFF0

ar delete/del <tên đã add> ( xoá autoresponder )
ar del test

ar show <tên ar>
Ví dụ: Ar tên boy1, boy2 -> tên là boy sẽ hiển thị tất cả ar có từ boy ở trước đó

ar line <tên đã add> | true/false (bật/tắt) ( hiển thị ar theo thứ tự như show )

ar include <tên đã add> | true/false (bật/tắt) ( nếu tin nhắn ai đó có từ gọi ar thì ar đó sẽ được gọi )

Lưu ý :
- Nếu muốn bot reply tin nhắn thì sử dụng "ar content". Còn những thứ còn lại là reply theo dạng embed

- Có thể gửi link hình ảnh để gửi mỗi ảnh không có khung embed

```
Quay trở lại [Danh sách lệnh](#danh-sách-lệnh)

# Welcome
```
/set log-welcome - set kênh mà bạn muốn bot trả embed về khi có thành viên mới vào server

Placeholder :

{user} - trả về @user

{user_tag} - trả về username ( tên người dùng )

{user_avatar} - trả về link avatar của user

{user_display} - tên trong server ( nếu có )

{user_thumbnail} - trả về link background của user

{server_avatar} - trả về link avatar server
```
Quay trở lại [Danh sách lệnh](#danh-sách-lệnh)

# Embed
```
1. /embed create - Tạo embed

2. /embed edit - Edit lại thông tin trên embed
- Chỉ thêm thông tin trên embed, nếu nhập sai phải xoá và nhập lại
```
Quay trở lại [Danh sách lệnh](#danh-sách-lệnh)

# Ticket
```
1. Dùng /ticket create để tạo tin nhắn ticket
- Tạo embed [Embed](#embed)
- Embed phải có tin nhắn ( content hoặc embed description/title/... )

2. Dùng /ticket add-button để thêm nút
- label: Tên nút
- Emoji: Emoji trước nút
- Embed: Embed cho nút này, sử dụng {ticket_name} để gọi tên ticket 

Placeholder :
{user} - trả về @user

{user_tag} - trả về username ( tên người dùng )

{user_avatar} - trả về link avatar của user

{user_display} - tên trong server ( nếu có )

{user_thumbnail} - trả về link background của user

{server_avatar} - trả về link avatar server
```
Quay trở lại [Danh sách lệnh](#danh-sách-lệnh)

# Player
```
tinhluong - hiển thị tất cả bill hiện có ở kênh hiện tại

luong - gửi tin nhắn bill riêng cho bạn ( cần mở dms )
```
Quay trở lại [Danh sách lệnh](#danh-sách-lệnh)

# Khách
```
cash - xem số tiền hiện có

give <@user> <số tiền> - chuyển tiền bot cho người khác

topbook - xem 10 người book nhiều nhất

topgift - hiển thị bảng tổng số lần tặng quà của các member
```
Quay trở lại [Danh sách lệnh](#danh-sách-lệnh)

# Shop
```
/additem - thêm món đồ mà bạn muốn bán nó

/deleteitem - xoá một trong số những món đồ mà bạn đã thêm

/takeitem - lấy đi vật phẩm từ kho đồ của một member bất kỳ

/edititem - dùng để sửa đổi sản phẩm hiện có

shop - xem cửa hàng

buy <id> - mua một trong số những món đồ hiện tại đang có ở shop

gift <@user> <id> - tặng một món đồ của bạn cho bất kỳ ai

unbox - mở quà ( nếu có )

inventory - xem kho đồ hiện tại của bạn

Lưu ý :
- /additem name là lb để sửa emoji lucky box ( nhập giá bất kì )

- Các Id sẽ theo thứ tự tăng dần

- Nếu item đó bị xoá, item trong inventory toàn bộ user sẽ bị xoá

- Id sẽ tự tạo theo thứ tự, nếu mất thứ tự ( 1,2,3,5 ) id tiếp theo là 4

- Nhập type item ở edit hoặc add là ring để đặt đồ đó là nhẫn
```
Quay trở lại [Danh sách lệnh](#danh-sách-lệnh)

# Marry
```
marry <user> <ring> - marry với người nào đó bằng nhẫn được mua ở shop

marry divorce - ly hôn

marry luv - nói lời yêu thương

marry profile - xem profile

Lưu ý :
- Nhập type item ở edit hoặc add là ring để đặt đồ đó là nhẫn mới có thể marry được
```
Quay trở lại [Danh sách lệnh](#danh-sách-lệnh)