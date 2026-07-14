import Container from "@/components/layout/Container";
import Image from "next/image";

const Works = () => {
  return (
    <Container>
      <div>
        <h3>ЯК ЦЕ ПРАЦЮЄ</h3>
        <h2>Просто. Натурально. Змістовно.</h2>
        <ul>
          <li className="">
            <div className=" relative w-[100px] h-[100px]">
              <Image
                src="/img/first.svg"
                alt={"herbs"}
                fill
                className="object-cover"
              />
            </div>
          </li>
          <li className="">
            <div className=" relative w-[100px] h-[100px]">
              <Image
                src="/img/second.svg"
                alt={"herbs"}
                fill
                className="object-cover"
              />
            </div>
          </li>
          <li className="">
            <div className=" relative w-[100px] h-[100px]">
              <Image
                src="/img/third.svg"
                alt={"herbs"}
                fill
                className="object-cover"
              />
            </div>
          </li>
          <li className="">
            <div className=" relative w-[100px] h-[100px]">
              <Image
                src="/img/fourth.svg"
                alt={"herbs"}
                fill
                className="object-cover"
              />
            </div>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default Works;
