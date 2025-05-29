"use client"

const TermsAndConditionsPage = () =>{


  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="gap-8 w-full lg:gap-16">
        {/* Main Content */}
        <div className="md:w-3/4 lg:w-4/5">
          {/* Terms & Condition Section */}
          <section id="terms" className="mb-12">
            <h2 className="text-xl font-bold mb-4">01. Terms & Condition</h2>
            <p className="mb-4 text-justify">
              Praesent ultrices dictum elementum. Nam vulputate urna vel lectus maximus, eget facilisis turpis
              hendrerit. Sed iaculis molestie arcu, et accumsan nisi. Quisque molestie velit vitae ligula luctus
              bibendum. Duis sit amet eros tortor, viverra ipsum sed, convallis sapien. Donec justo erat, pulvinar vitae
              dui ut, finibus euismod enim. Donec velit tortor, mollis eu tortor euismod, gravida laoreus arcu.
            </p>
            <p className="mb-4">In ac turpis mi. Donec quis semper neque. Nulla cursus gravida interdum.</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>
                Curabitur luctus sapien augue, mattis faucibus nisi vehicula nec. Mauris at scelerisque lorem. Nullam
                tempus felis ipsum, sagittis malesuada nulla vulputate et.
              </li>
              <li>Aenean vel metus leo. Vivamus nec neque a libero sodales aliquam a et dolor.</li>
              <li>Vestibulum rhoncus sagittis dolor vel finibus.</li>
              <li>Integer feugiat lacus ut efficitur mattis. Sed quis molestie velit.</li>
            </ul>
          </section>

          {/* Limitations Section */}
          <section id="limitations" className="mb-12">
            <h2 className="text-xl font-bold mb-4">02. Limitations</h2>
            <p className="mb-4 text-justify">
              In pretium mi non sem facilisis, in vulputate quam maximus. Aliquam metus mauris, semper eu eros vitae,
              blandit tristique metus. Sed condimentum facilisis eros. Ut id facilisis metus. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Fusce vel erat elit. In vitae turpis tempor, accumsan sapien vitae,
              rutrum eros. Integer pulvinar mattis turpis, ac fermentum leo ullamcorper a. Nam finibus eros libero, sit
              amet mattis lacus tristique eu. Donec nec ex convallis, ultricies eros ut, mollis libero. Ut scelerisque
              lacus interdum consectetur sodales.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>In ac turpis mi. Donec quis semper neque. Nulla cursus gravida interdum.</li>
              <li>Curabitur luctus sapien augue.</li>
              <li>Fusce faucibus nisi vehicula nec. Mauris at scelerisque lorem.</li>
              <li>Nullam tempus felis ipsum, sagittis malesuada nulla vulputate et. Aenean vel metus leo.</li>
              <li>Vivamus nec neque a libero sodales aliquam a et dolor.</li>
            </ul>
          </section>

          {/* Security Section */}
          <section id="security" className="mb-12">
            <h2 className="text-xl font-bold mb-4">03. Security</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ex neque, elementum eu blandit in,
              ornare eu ligula. Fusce eu rhoncus mi, quis ultricies lacus. Phasellus id pellentesque nulla. Cras erat
              nisi, mollis et efficitur et, luctus gravida augue quis lorem.
            </p>
          </section>

          {/* Privacy Policy Section */}
          <section id="privacy" className="mb-12">
            <h2 className="text-xl font-bold mb-4">04. Privacy Policy</h2>
            <p className="mb-4 text-justify">
              Praesent non sem facilisis, hendrerit nisi vitae, vulputat quam. Aliquam metus mauris, semper eu eros
              vitae, blandit tristique metus. Vestibulum maximus nec justo sed maximus. Vivamus sit amet turpis sem.
              Integer vitae tortor ac ex scelerisque facilisis ac vitae urna. In hac habitasse platea dictumst. Maecenas
              imperdiet tortor arcu, nec tincidunt ligula malesuada vulputat.
            </p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>In ac turpis mi. Donec quis semper neque. Nulla cursus gravida interdum.</li>
              <li>Mauris at scelerisque lorem. Nullam tempus felis ipsum, sagittis malesuada nulla vulputate et.</li>
              <li>Aenean vel metus leo.</li>
              <li>Vestibulum rhoncus sagittis dolor vel finibus.</li>
              <li>Integer feugiat lacus ut efficitur mattis. Sed quis molestie velit.</li>
            </ul>
            <p className="mb-4 text-justify">
              Fusce rutrum mauris sit amet justo rutrum, ut sodales lorem ullamcorper. Aliquam vitae lacinia urna. Nulla
              vitae mi quis viverra ullamcorper vel elementum est. Mauris vitae elit nec enim tincidunt aliquet. Donec
              ultricies nulla a enim pulvinar, quis pulvinar lacus consectetur. Donec dignissim, risus nec mollis
              efficitur, turpis erat blandit urna, eget elementum lacus lectus eget lorem.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}


export default TermsAndConditionsPage;