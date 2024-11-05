
type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};
const CarouselControls = (props: Props) => {

  return (
    <div className="w-full hidden lg:flex justify-between px-8">
      <button
        onClick={() => {
          if (props.canScrollPrev) {
            props.onPrev();
          }
        }}
        disabled={!props.canScrollPrev}
        className={`p-2 text-white rounded-full 
            ${props.canScrollPrev ? "bg-blue-300 transition duration-500 hover:bg-blue-100 hover:text-blue-900" 
                :`bg-indigo-200` }`}
      >
        <svg fill="#202" height="48px" width="48px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 297" transform="matrix(-1, 0, 0, 1, 0, 0)"><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <g> <path d="M148.5,0C66.485,0,0,66.485,0,148.5S66.485,297,148.5,297S297,230.515,297,148.5S230.515,0,148.5,0z M159.083,231.5H90.75 l74.25-84l-74.25-81h68.333l71.917,81L159.083,231.5z"></path> </g> </g></svg>
      </button>
      
      <button
        onClick={() => {
          if (props.canScrollNext) {
            props.onNext();
          }
        }}
        disabled={!props.canScrollNext}
        className={`text-white p-2 rounded-full 
            ${props.canScrollNext ? "bg-blue-300 z-20 transition duration-500 hover:bg-blue-200 hover:text-blue-900" 
                :`bg-indigo-200` }`}
      >
        <svg fill="#202" height="48px" width="48px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 297 297" ><g strokeWidth="0"></g><g strokeLinecap="round" strokeLinejoin="round"></g><g> <g> <path d="M148.5,0C66.485,0,0,66.485,0,148.5S66.485,297,148.5,297S297,230.515,297,148.5S230.515,0,148.5,0z M159.083,231.5H90.75 l74.25-84l-74.25-81h68.333l71.917,81L159.083,231.5z"></path> </g> </g></svg>
      </button>
    </div>
  );
};
export default CarouselControls;
