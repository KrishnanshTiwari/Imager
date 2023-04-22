import React , { useEffect, useState } from 'react'
import Card from '../components/Card';
import Loader from '../components/Loader';

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return (
      data.map((post) => <Card key={post._id} {...post} />)
    );
  }
  return (
    <h2 className="mt-5 font-bold text-[#9cd2ff] text-xl uppercase">{title}</h2>
  );
};

const Community = () => {
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const fetchPosts = async () => {
    setLoading(true);

    try {
      const response = await fetch('https://imager-xi.vercel.app//api/v1/post', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const result = await response.json();
        setAllPosts(result.data.reverse());
      }
    } catch (err) {
      alert(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-extrabold text-[#DFF6FF] text-[32px]">The Community Showcase</h1>
        <p className="mt-2 text-[#a3b9c2] text-[14px] max-w-[500px]">Bringing Imagination to Life: Discover the Magic of AI Image Generation with Our Community Showcase</p>
      </div>
      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>  
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 grid-cols-1 gap-3">
                <RenderCards
                  data={allPosts}
                  title="No Posts Yet"
                />
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Community;