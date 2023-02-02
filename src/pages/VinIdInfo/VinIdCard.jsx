function VinIdCard(card) {
  return (
    <article className="info">
      <h4 className="list-card-groupname">{card.card.GroupName}</h4>
      <h5 className="list-card-tittle">{card.card.Name}</h5>
      <p className="list-card-descript">
        {card.card.Description.replace("<p>", "").replace("</p>", "")}
      </p>
    </article>
  );
}

export default VinIdCard;
