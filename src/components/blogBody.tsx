import './style.css';

interface DataObject {
    id: number;
    data: string;
}

interface Props {
    data: DataObject[];
}

const DropPara: React.FC<{ dropPara: string }> = ({ dropPara }) => (
    <p className="drop-cap">{dropPara}</p>
);

const Para: React.FC<{ data: string }> = ({ data }) => <p>{data}</p>;

const BlogBody: React.FC<Props> = ({ data }) => {
    const firstData = data[0].data;
    const restData = data.slice(1);

    return (
        <div id="main-body">
            <DropPara dropPara={firstData} />
            {restData.map((data) => (
                <Para key={data.id} data={data.data} />
            ))}
        </div>
    );
};

export default BlogBody;