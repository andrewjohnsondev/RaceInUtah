import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);

    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log({ error, errorInfo });
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="mx-auto my-12 grid w-full max-w-md grid-rows-2 rounded bg-white">
          <div className="flex flex-col items-center justify-center gap-4 rounded-t bg-red-100 py-8">
            <img src="/assets/frown.svg" alt="" />
            <h2 className="text-2xl font-bold uppercase tracking-widest text-red-900">
              Error
            </h2>
          </div>
          <div className="space-y-8 py-8 text-center">
            <h2 className="text-xl">Oops, there is an error!</h2>
            <button
              className="rounded bg-red-900 py-2 px-4 text-xl text-white"
              type="button"
              onClick={() => this.setState({ hasError: false })}
            >
              Try again?
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
