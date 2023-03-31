import { COL } from "../utils/consts";

interface Props {
  col: COL;
}

const TableHeader: React.FC<Props> = ({ col }) => {
  return (
    <th>
      {col}
    </th>
  );
}

export default TableHeader;
