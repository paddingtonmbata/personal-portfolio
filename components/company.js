export default function Company({position, company_name, duration, responsibilities, company_link}) {
    return (
        <div className="company p-4 rounded-lg mt-2 mb-2">
            <div className="company_name text-white">
                {position} <span className="text-sky-500">@ <a className="hover:underline underline-offset-1" href={company_link} target="_blank" rel="noopener noreferrer">{company_name}</a> </span>
            </div>
            <div>
                <p>{duration}</p>
                <ul className="immersed_list">                
                    {responsibilities.map((r)=> (
                        <li key={r}>{r}</li>
                    ))}
                </ul>
            </div>
            
        </div>
    );
}