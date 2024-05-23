import BodCard from "@/components/BOD/BodCard";
import blogData from "@/components/BOD/blogData";
import  MemberDetail from "@/components/BOD/BodDetail"
const MemberIndex = () => {
  return (
    <>
      <section className="pb-[120px] pt-[120px] bg-white">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            {blogData.map((member) => (
              <div
                key={member.id}
                className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <BodCard member={member} />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center pt-8">
            <a
              href="#0"
              className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white mx-1"
            >
              Prev
            </a>
            <a
              href="#0"
              className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white mx-1"
            >
              1
            </a>
            <a
              href="#0"
              className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white mx-1"
            >
              2
            </a>
            <a
              href="#0"
              className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white mx-1"
            >
              3
            </a>
            <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color mx-1">
              ...
            </span>
            <a
              href="#0"
              className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white mx-1"
            >
              12
            </a>
            <a
              href="#0"
              className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white mx-1"
            >
              Next
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default MemberIndex;
