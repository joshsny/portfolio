import { useState, useRef } from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import { trackGoal } from 'fathom-client';

import fetcher from 'lib/fetcher';
import { Form, FormState, Subscribers } from 'lib/types';
import SuccessMessage from 'components/SuccessMessage';
import ErrorMessage from 'components/ErrorMessage';
import LoadingSpinner from 'components/LoadingSpinner';

export default function Subscribe() {
  const [form, setForm] = useState<FormState>({ state: Form.Initial });
  const inputEl = useRef(null);
  const { data } = useSWR<Subscribers>('/api/subscribers', fetcher);
  const subscriberCount = new Number(data?.count);

  const subscribe = async (e) => {
    e.preventDefault();
    setForm({ state: Form.Loading });

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: inputEl.current.value
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();
    if (error) {
      setForm({
        state: Form.Error,
        message: error
      });
      return;
    }

    trackGoal('JYFUFMSF', 0);
    inputEl.current.value = '';
    setForm({
      state: Form.Success,
      message: `Hooray! You're now on the list.`
    });
  };

  return (
    <div className="w-full p-6 my-4 border border-blue-200 rounded dark:border-gray-800 bg-blue-50 dark:bg-blue-opaque">
      <p className="text-lg font-bold text-gray-900 md:text-xl dark:text-gray-100">
        Subscribe to the newsletter
      </p>
      <p className="my-1 text-gray-800 dark:text-gray-200">
        Get emails from me about web development, tech, and early access to new
        articles.
      </p>
      <form className="relative my-4" onSubmit={subscribe}>
        <input
          ref={inputEl}
          aria-label="Email for newsletter"
          placeholder="tim@apple.com"
          type="email"
          autoComplete="email"
          required
          className="block w-full px-4 py-2 pr-32 mt-1 text-gray-900 bg-white border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:text-gray-100"
        />
        <button
          className="absolute flex items-center justify-center h-8 px-4 pt-1 font-medium text-gray-900 bg-gray-100 rounded right-1 top-1 dark:bg-gray-700 dark:text-gray-100 w-28"
          type="submit"
        >
          {form.state === Form.Loading ? <LoadingSpinner /> : 'Subscribe'}
        </button>
      </form>
      {form.state === Form.Error ? (
        <ErrorMessage>{form.message}</ErrorMessage>
      ) : form.state === Form.Success ? (
        <SuccessMessage>{form.message}</SuccessMessage>
      ) : (
        <p className="text-sm text-gray-800 dark:text-gray-200">
          {`${
            subscriberCount > 0 ? subscriberCount.toLocaleString() : '-'
          } subscribers – `}
          <Link href="/newsletter">
            <a>See previous issues</a>
          </Link>
        </p>
      )}
    </div>
  );
}
