import DecryptedText from './DecryptedText';

const CoolText = ({ text = "HEY, I'M ZARJIJ HASAN" }) => {
  return (
    <div className="font-mono text-3xl md:text-5xl font-bold tracking-tight">
      <DecryptedText
        text={text}
        speed={50}
        maxIterations={15}
        animateOn="view"
        className="text-black"
        encryptedClassName="text-yellow-500"
      />
    </div>
  );
};

export default CoolText;
