import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <>
        <section class="contact-section bg-black">
          <div class="container">
            <div class="row">
              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    <i class="fas fa-map-marked-alt text-primary mb-2" />
                    <h4 class="text-uppercase m-0">Address</h4>
                    <hr class="my-4" />
                    <div class="small text-black-50">St. Petersburg, FL</div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    <i class="fas fa-envelope text-primary mb-2" />
                    <h4 class="text-uppercase m-0">Email</h4>
                    <hr class="my-4" />
                    <div class="small text-black-50">
                      <a href="mailto:allanseitz@yahoo.com">
                        AllanSeitz@yahoo.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div class="col-md-4 mb-3 mb-md-0">
                <div class="card py-4 h-100">
                  <div class="card-body text-center">
                    <i class="fas fa-mobile-alt text-primary mb-2" />
                    <h4 class="text-uppercase m-0">Phone</h4>
                    <hr class="my-4" />
                    <div class="small text-black-50">+1 (727) 519-3596</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="social d-flex justify-content-center">
              <a href="#" class="mx-2">
                <i class="fab fa-twitter" />
              </a>
              <a href="#" class="mx-2">
                <i class="fab fa-facebook-f" />
              </a>
              <a href="#" class="mx-2">
                <i class="fab fa-github" />
              </a>
            </div>
          </div>
        </section>
        <footer class="bg-black small text-center text-white-50">
          <div class="container">Copyright &copy; Allans Portfolio 2018</div>
        </footer>
      </>
    );
  }
}

export default Footer;
