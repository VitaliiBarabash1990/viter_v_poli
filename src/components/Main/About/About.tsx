import Container from "@/components/layout/Container";
import Button from "@/ui/Button";
import Image from "next/image";

const About = () => {
  return (
    <Container className="bg-background-green text-text-w">
      <div className="flex [@media(max-width:950px)]:flex-col">
        <div className="flex-1 max-w-[389px]">
          <h3 className="text-[16px]">ПРО МЕНЕ</h3>
          <h2 className="text-[24px]">
            Я - Ірина, травниця з любов’ю до природи
          </h2>
          <p>
            З дитинства мене оточували трави, поля та ліси. Я збираю рослини
            в своєму рідному краї, сушу їх з повагою до традицій і створюю
            мішечки, які допомагають повернути баланс та гармонію.
          </p>
          <Button variant="outline">Дізнатися мою історію</Button>
        </div>
        <div className="flex flex-1 items-end">
          <div className="w-full max-w-[185px] h-[240px] relative rounded-lg left-[30px]">
            <Image
              src="/img/about_herb.webp"
              alt={"herb"}
              fill
              className="object-cover rotate-[1.58deg] rounded-lg z-10 border-3 border-white"
            />
          </div>
          <div className="w-full max-w-[372px] h-[372px] relative rounded-lg">
            <Image
              src="/img/about_girl.webp"
              alt={"girl"}
              fill
              className="object-cover rotate-[-3.03deg] rounded-lg border-3 border-white"
            />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default About;
