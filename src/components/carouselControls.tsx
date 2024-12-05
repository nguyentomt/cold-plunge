type Props = {
  canScrollPrev: boolean;
  canScrollNext: boolean;
  onPrev(): void;
  onNext(): void;
};
const CarouselControls = (props: Props) => {
  return (
      <div className="flex lg:flex justify-between lg:px-0">
        <button
          aria-label="Left button"
          onClick={() => {
            if (props.canScrollPrev) {
              props.onPrev();
            }
          }}
          disabled={!props.canScrollPrev}
          className="rounded-full"
        >
          <svg
            height="48px"
            width="48px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 297 297"
            transform="matrix(-1, 0, 0, 1, 0, 0)"
            className="fill-gray-900 bg-gray-200 hover:fill-gray-200 hover:bg-gray-900 duration-300 rounded-full"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              {" "}
              <g>
                {" "}
                <path d="M148.5,0C66.485,0,0,66.485,0,148.5S66.485,297,148.5,297S297,230.515,297,148.5S230.515,0,148.5,0z M159.083,231.5H90.75 l74.25-84l-74.25-81h68.333l71.917,81L159.083,231.5z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>

        <button
          aria-label="Right button"
          onClick={() => {
            if (props.canScrollNext) {
              props.onNext();
            }
          }}
          disabled={!props.canScrollNext}
          className="rounded-full"
        >
          <svg
            
            height="48px"
            width="48px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 297 297"
            className="fill-gray-900 bg-gray-200 hover:fill-gray-200 hover:bg-gray-900 duration-300 rounded-full"
          >
            <g strokeWidth="0"></g>
            <g strokeLinecap="round" strokeLinejoin="round"></g>
            <g>
              {" "}
              <g>
                {" "}
                <path d="M148.5,0C66.485,0,0,66.485,0,148.5S66.485,297,148.5,297S297,230.515,297,148.5S230.515,0,148.5,0z M159.083,231.5H90.75 l74.25-84l-74.25-81h68.333l71.917,81L159.083,231.5z"></path>{" "}
              </g>{" "}
            </g>
          </svg>
        </button>
      </div>
  );
};
export default CarouselControls;
