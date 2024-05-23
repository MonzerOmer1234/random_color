export default function User({ user }) {
  const {
    avatar_url,
    following,
    followers,
    public_repos,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);

  return (
    <div className="user">
      <div>
       <a href={`https://github.com/${login}`}><img src={avatar_url} alt="User" className="avatar" /></a> 
      </div>
      <div>
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>
              User joined on{" "}
          {`${createdDate.getDate()} ${createdDate.toLocaleString("en-us", {
            month: "short",
          })} ${createdDate.getFullYear()}`}
        </p>
        <p>public repos number is {public_repos}</p>
        <p>Number of following of {name || login} is {following}</p>
        <p>Number of followers of {name || login} is {followers} </p>
      </div>
    </div>
  );
}
