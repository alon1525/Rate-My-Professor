import "./PicCard.css"
export default function PicCard({picture,title}) {

  return (
    <div class="CTACard__StyledCTACard-sc-1l1zcl0-0 huefLS">
      <img
        alt="Thumb War"
        src={picture}
        class="CTACard__CardImage-sc-1l1zcl0-1"
      ></img>
      <div class="CTACard__CardText-sc-1l1zcl0-2" dir="rtl">
        {title}
      </div>
    </div>
  );
}
