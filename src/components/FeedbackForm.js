import React, { useState } from 'react';

const FeedbackForm = ({ onSubmit, className }) => {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ rating, feedback });
    setSubmitted(true);
    setTimeout(() => {
      setRating(0);
      setFeedback('');
      setSubmitted(false);
    }, 3000);
  };

  if (submitted) {
    return (
      <div className={`text-center py-6 ${className}`}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-12 w-12 text-green-500 mx-auto" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
          />
        </svg>
        <h3 className="text-xl font-medium text-gray-900 mt-4">Cảm ơn phản hồi của bạn!</h3>
        <p className="text-gray-600 mt-2">Chúng tôi luôn nỗ lực cải thiện dịch vụ.</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <h3 className="text-lg font-medium text-gray-900 mb-4">Đánh giá dịch vụ</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Mức độ hài lòng
          </label>
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className="focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-8 w-8 ${
                    rating >= star ? 'text-yellow-500' : 'text-gray-300'
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </button>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">
            Phản hồi của bạn
          </label>
          <textarea
            id="feedback"
            rows={4}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder="Hãy chia sẻ trải nghiệm của bạn về dịch vụ của chúng tôi..."
            className="input-field"
            required
          />
        </div>
        
        <button
          type="submit"
          disabled={rating === 0}
          className={`w-full py-2 px-4 rounded-md transition-colors ${
            rating > 0
              ? 'bg-navy hover:bg-navy-light text-white'
              : 'bg-gray-300 cursor-not-allowed text-gray-500'
          }`}
        >
          Gửi phản hồi
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;