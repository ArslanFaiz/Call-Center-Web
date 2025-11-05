// ✅ Updated Blog Section with Publish Button & Improved Card Design
"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";

// Types
export type BlogType = {
  id: string;
  title: string;
  description: string;
  tags?: string[];
  status?: string;
  images?: { imageUrl: string }[];
  createdAt: string;
};

export default function Blog() {
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get(
        `https://technacallcanadabackend-production.up.railway.app/api/blogs?page=1&limit=10&publishedOnly=false`,
        {
          params: {
            page: 1,
            limit: 10,
            publishedOnly: false,
          },
        }
      );

      const data = res?.data?.data?.blogs ?? [];
      setBlogs(data);
    } catch (err) {
      console.log("Error fetching blogs:", err);
      setBlogs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 px-6 relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-center mb-14 mt-4"
          >
            Blog
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
            {/* Left Avatar */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <div className="relative w-24 h-24 shadow-lg shadow-blue-200 hover:shadow-blue-300 rounded-full overflow-hidden">
                <img
                  src="/assets/woman-profile.jpg"
                  alt="Author"
                  className="w-full h-full rounded-full object-cover border-4 border-blue-600"
                />
              </div>
            </motion.div>

            {/* Center Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-1 text-center"
            >
              <div className="w-full h-1 bg-gradient-to-r from-green-400 via-blue-500 to-blue-600 rounded-full mb-8 shadow-sm"></div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Insights, Updates, and Stories
              </h3>
              <p className="text-gray-600 text-lg">
                Explore our latest blogs, tips, and industry insights.
              </p>
            </motion.div>

            {/* Right Avatar */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <div className="relative w-24 h-24 shadow-lg shadow-blue-200 hover:shadow-blue-300 rounded-full overflow-hidden">
                <img
                  src="/assets/man-profile.jpg"
                  alt="Author"
                  className="w-full h-full rounded-full object-cover border-4 border-blue-600"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-gray-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">
            Latest Blogs
          </h2>

          {loading ? (
            <div className="text-center text-gray-500 text-lg">Loading...</div>
          ) : blogs.length === 0 ? (
            <div className="text-center text-gray-500 text-lg">
              No blogs available yet.
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              <AnimatePresence>
                {blogs.map((b) => (
                  <motion.div
                    key={b.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="bg-white rounded-2xl shadow-xl border border-gray-100 flex flex-col overflow-hidden hover:shadow-2xl transition-shadow"
                  >
                    {b?.images?.[0]?.imageUrl && (
                      <div className="relative w-full h-64 overflow-hidden">
                        <img
                          src={b.images[0].imageUrl}
                          alt={b.title}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    )}

                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex justify-between items-center text-sm text-gray-600 mb-4">
                        <span className="flex gap-2 flex-wrap">
                          {b?.tags && b.tags.length > 0 ? (
                            b.tags.map((tag) => (
                              <span
                                key={tag}
                                className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full text-xs font-medium"
                              >
                                {tag}
                              </span>
                            ))
                          ) : (
                            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
                              General
                            </span>
                          )}
                        </span>
                        <span className="text-gray-500">
                          {new Date(b.createdAt).toLocaleDateString()}
                        </span>
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3 leading-tight">
                        {b.title}
                      </h3>

                      <div
                        className="text-gray-600 mb-4 line-clamp-3 text-sm"
                        dangerouslySetInnerHTML={{ __html: b.description }}
                      ></div>

                      <div className="mb-4">
                        <span
                          className={`px-3 py-1 text-xs rounded-full font-semibold uppercase tracking-wide ${{
                            published: "bg-green-100 text-green-700",
                            unpublished: "bg-red-100 text-red-600",
                          }[b.status || "unpublished"]}`}
                        >
                        </span>
                      </div>

                      {/* Publish button removed */}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}