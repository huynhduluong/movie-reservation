import { Scrollbars } from "react-custom-scrollbars";

const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: "rgba(35, 49, 86, 0.8)",
    width: "3px",
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

export const CustomScrollbars = (props) => (
  <Scrollbars
    renderThumbVertical={renderThumb}
    autoHide
    autoHideTimeout={500}
    autoHideDuration={200}
    {...props}
  />
);
