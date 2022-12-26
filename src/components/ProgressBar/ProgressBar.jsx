export const ProgressBar = ({ bgcolor, progress, height }) => {
  const Parentdiv = {
    height: height,
    width: "90%",
    backgroundColor: "whitesmoke",
    borderRadius: 40,
    margin: 10,
  };

  const Childdiv = {
    height: "100%",
    width: `${progress}%`,
    maxWidth: "100%",
    backgroundColor: bgcolor,
    borderRadius: 40,
    textAlign: "right",
    transition: "width 1s ease-in-out",
  };

  const progresstext = {
    padding: 10,
    color: "black",
    fontWeight: 900,
  };

  return (
    <div style={Parentdiv}>
      <div style={Childdiv}>
        <span style={progresstext}>{`${progress}%`}</span>
      </div>
    </div>
  );
};
