function Registratioin() {
  return (
    <div>
      <h2 className="text-3xl font-bold py-6">Create an Account</h2>
      <form action="" className="w-96">
        <label className="" htmlFor="">
          Name*
        </label>
        <input
          className="bg-gray-200 pl-4 rounded-xl h-12 w-full mb-6 outline-none focus:bg-slate-100"
          placeholder="Enter Your Name"
          type="text"
        />
        <label htmlFor="">Email*</label>
        <input
          className="bg-gray-200 pl-4 rounded-xl h-12 w-full mb-6 outline-none focus:bg-slate-100"
          placeholder="Enter Your Email"
          type="email"
        />
        <label htmlFor="">Password*</label>
        <input
          className="bg-gray-200 pl-4 rounded-xl h-12 w-full mb-6 outline-none focus:bg-slate-100"
          placeholder="Enter Your password"
          type="password"
        />
        <button className="bg-[#693DF5] text-white py-2 px-8 rounded-full font-bold">
          sign in
        </button>
      </form>
    </div>
  );
}

export default Registratioin;
