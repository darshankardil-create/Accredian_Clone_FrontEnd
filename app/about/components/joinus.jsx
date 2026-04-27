import Button from "@mui/material/Button";

const joinus = () => {
  return (
    <section className="py-14 px-4 w-full ">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-bold place-items-center">
          <div className="text-center bg-[#7CDAFF] h-[206.56px] w-[330.56px] leading-7 rounded-lg  pt-5">
            <p className="text-xl font-bold text-gray-800 mb-2">
              Join our team
            </p>
            <p className="text-gray-600">
              Explore current job openings in full
            </p>
            <p className="text-gray-600 mb-4">
              time, internships and freelance.
            </p>

            <Button
              variant="contained"
              size="large"
              sx={{
                background: "#F8F9FA",
                color: "black",
                fontWeight: "700",
              }}
            >
              Current job openings
            </Button>
          </div>

          <div className="text-center bg-[#F7B500] h-[206.56px] w-[330.56px] font-bold leading-7  pt-5 rounded-lg">
            <p className="text-xl font-bold text-gray-800 mb-2">
              Public Relations
            </p>
            <p className="text-gray-600">For any media enquiries,</p>
            <p className="text-gray-600 mb-4">drop us an email.</p>

            <Button
              variant="contained"
              size="large"
              sx={{
                background: "#F8F9FA",
                color: "black",
                fontWeight: "700",
              }}
            >
              info@accredian.com
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default joinus;
