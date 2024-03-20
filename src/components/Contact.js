const Contact = () => {
  return (
    <div className="text-center">
      <h1 className="font-bold text-3xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          type="text"
          className="border border-black p-2 my-4"
          placeholder="name"
        />
        <br />
        <input
          type="text"
          className="border border-black p-2 my-4"
          placeholder="message"
        />
        <br />
        <button className="border border-black bg-gray-100 rounded-lg p-2 my-4">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
