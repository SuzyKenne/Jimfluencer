const TrustedUsers = () => {
  const profiles = [
    'https://framerusercontent.com/images/FW7gdHyIJZUqRX0WLmQwCo53YI4.png',

    'https://framerusercontent.com/images/Bwgwwe4qJCF29kCrDg7c4NMzek.png',

    'https://framerusercontent.com/images/zA7hg7OUnSahgBJcsn7HpCAtY.png',
  ];

  return (
    <div className="flex items-center gap-2">
      <div className="flex">
        {profiles.map((profile, index) => (
          <img
            key={index}
            src={profile}
            alt={`User ${index + 1}`}
            className="w-8 h-8 rounded-full border-2 border-white -ml-3 first:ml-0"
          />
        ))}
      </div>

      <span className="text-white text-base font-bold">
        Trusted by 3+ million users
      </span>
    </div>
  );
};

export default TrustedUsers;
