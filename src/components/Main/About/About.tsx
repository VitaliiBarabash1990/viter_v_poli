import Container from "@/components/layout/Container";
import Button from "@/ui/Button";
import Image from "next/image";

const About = () => {
  return (
    <Container className="bg-background-green text-text-w">
      <div className="flex [@media(max-width:900px)]:flex-col mx-auto items-center">
        <div className="flex-1 [@media(max-width:900px)]:max-w-[430px] md:max-w-[300px] lg:max-w-[389px]">
          <h3 className="text-[16px] [@media(max-width:900px)]:text-center text-start">
            ПРО МЕНЕ
          </h3>
          <h2 className="text-[24px] [@media(max-width:900px)]:text-center text-start">
            Я - Ірина, травниця з любов’ю до природи
          </h2>
          <p className="[@media(max-width:900px)]:text-center text-start pt-[16px] pb-[24px]">
            З дитинства мене оточували трави, поля та ліси. Я збираю рослини
            в своєму рідному краї, сушу їх з повагою до традицій і створюю
            мішечки, які допомагають повернути баланс та гармонію.
          </p>
          <Button variant="outline">Дізнатися мою історію</Button>
        </div>
        <div className="flex flex-1 items-end w-full justify-center [@media(max-width:900px)]:ml-[-40px] pt-[24px] pb-[24px]">
          <div className="w-full max-w-[96px] h-[125px] md:max-w-[185px] md:h-[240px] relative rounded-lg left-[30px]">
            <Image
              src="/img/about_herb.webp"
              alt={"herb"}
              fill
              className="object-cover rotate-[1.58deg] rounded-lg z-10 border-3 border-white"
            />
          </div>
          <div className="w-full h-[194px] max-w-[194px] md:max-w-[372px] md:h-[372px] relative rounded-lg">
            <Image
              src="/img/about_girl.webp"
              alt={"girl"}
              fill
              className="object-cover rotate-[-3.03deg] rounded-lg border-3 border-white"
            />
          </div>
          <div className="w-[121px] md:w-[186px]  bg-[#F1E8DD] text-text-b p-[12px] rounded-xl z-[10] mb-[115px] ml-[-40px] md:mb-[270px] md:ml-[-50px]">
            <p className="text-[12px] md:text-[18px]">
              ‘‘Трави - це мова землі, а я лише її перекладач.’’
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
