import React from 'react';

const SectionOne = () => {
    return (
        <section className="container-fluid section-one">
            <div
                className="row align-items-center"
            // style={{ paddingTop: "84px" }}
            >
                <div className="col-md-8 offset-md-2 col-sm-12 work-from-home">
                    WEEKEND FROM HOME
            </div>
            </div>
            <div
                className="row align-items-center"
                style={{ paddingTop: "20px" }}
            >
                <div className="col-md-8 offset-md-2 col-sm-12 stay-active-with-a-l">
                    Stay active with a little workout.
            </div>
            </div>
            <div
                className="row align-items-center"
            // style={{ paddingTop: "67px" }}
            >
                <div className="col-md-4 offset-md-4 col-sm-12 lego-1">
                    <div className="row justify-content-center">
                        <div>
                            <button className="btn btn-default btn-go">
                                <span>Let's Go</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionOne;
