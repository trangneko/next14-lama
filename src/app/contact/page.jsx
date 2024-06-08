export const metadata = {
  title: 'Liên hệ',
  description: 'Nơi chủ shop Petito order hàng Nhật nghĩ tác phẩm tốt nghiệp.',
}

const ContactPage = () => {
  return (
    <div className="flex justify-around">
      <div className="w-96 h-96">
        <Image src="/contact.png" alt="" fill/>
      </div>
      <div className="container">
        <form action="" className="flex flex-col gap-6">
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;