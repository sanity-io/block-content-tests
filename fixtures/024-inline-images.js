module.exports = {
  input: [
    {
      _key: '08707ed2945b',
      _type: 'block',
      style: 'normal',
      children: [
        {
          _key: '08707ed2945b0',
          text: 'Foo! Bar!',
          _type: 'span',
          marks: ['code']
        },
        {
          _key: 'a862cadb584f',
          _type: 'image',
          asset: {
            _ref: 'image-magnificent_beastZ8Z5qZHHxgrTJf6Hhz-162x120-png',
            _type: 'reference'
          }
        },
        {_key: '08707ed2945b1', text: 'Neat', _type: 'span', marks: []}
      ],
      markDefs: []
    },

    {
      _key: 'abc',
      _type: 'block',
      style: 'normal',
      children: [
        {
          _key: '08707ed2945b0',
          text: 'Foo! Bar! ',
          _type: 'span',
          marks: ['code']
        },
        {
          _key: 'a862cadb584f',
          _type: 'image',
          asset: {
            _ref: 'image-magnificent_beastZ8Z5qZHHxgrTJf6Hhz-162x120-png',
            _type: 'reference'
          }
        },
        {_key: '08707ed2945b1', text: ' Baz!', _type: 'span', marks: ['code']}
      ],
      markDefs: []
    },

    {
      _key: 'def',
      _type: 'block',
      style: 'normal',
      children: [
        {
          _key: '08707ed2945b0',
          text: 'Foo! Bar! ',
          _type: 'span',
          marks: []
        },
        {
          _key: 'a862cadb584f',
          _type: 'image',
          asset: {
            _ref: 'image-magnificent_beastZ8Z5qZHHxgrTJf6Hhz-162x120-png',
            _type: 'reference'
          }
        },
        {_key: '08707ed2945b1', text: ' Baz!', _type: 'span', marks: ['code']}
      ],
      markDefs: []
    }
  ],
  output:
    '<div><p><code>Foo! Bar!</code><img src="https://cdn.sanity.io/images/3do82whm/production/magnificent_beastZ8Z5qZHHxgrTJf6Hhz-162x120.png">Neat</p><p><code>Foo! Bar! </code><img src="https://cdn.sanity.io/images/3do82whm/production/magnificent_beastZ8Z5qZHHxgrTJf6Hhz-162x120.png"><code> Baz!</code></p><p>Foo! Bar! <img src="https://cdn.sanity.io/images/3do82whm/production/magnificent_beastZ8Z5qZHHxgrTJf6Hhz-162x120.png"><code> Baz!</code></p></div>'
}
