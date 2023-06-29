type Props = {
  params: {
    item: string;
  };
};

export default function Item({ params }: Props) {
  return <>{params.item}</>;
}
