type Props = {
  params: {
    slug: string;
  };
};

const RestaurantMenu = ({ params }: Props) => {
  const { slug } = params;
  return (
    <div>
      <h1>Menú del restaurante: {slug}</h1>
    </div>
  );
};

export default RestaurantMenu;
