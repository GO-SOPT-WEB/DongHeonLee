import Card from "./Card";

const CardGame = () => {
  return (
    <section>
      <div>
        <Button
          type="difficulty"
          innerText="Easy"
          onClick={(e) => console.log(e.target)}
        />
        <Button
          type="difficulty"
          innerText="Normal"
          onClick={(e) => console.log(e.target)}
        />
        <Button
          type="difficulty"
          innerText="Hard"
          onClick={(e) => console.log(e.target)}
        />
      </div>
      <main>
        <Card />
      </main>
    </section>
  );
};

const Button = ({ type, innerText, onClick }) => {
  return (
    <button type="button" onClick={onClick}>
      {innerText}
    </button>
  );
};

export default CardGame;
