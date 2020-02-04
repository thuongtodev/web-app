export const mockArticles = [
  {
    id: 'mockArticles_____001',
    title: 'Ex-Mt. Gox CEO Mark Karpeles wants lawsuit dismissed',
    image:
      'https://coingeek.com/wp-content/uploads/2020/01/ex-mt-gox-ceo-mark-karpeles-wants-lawsuit-dismissed-280x139.jpg',
    description:
      'Mark Karpeles has asked a federal court to conclude a long-running lawsuit against him by dismissing the action.',
    url: '/videos/ex-mt-gox-ceo-mark-karpeles-wants-lawsuit-dismissed/',
    category: 'Business',
    datetime: '4 hours ago',
  },
  {
    id: 'mockArticles_____002',
    title: 'Tulip Trust 3 documents produced in Kleiman vs Wright lawsuit',
    image:
      'https://coingeek.com/wp-content/uploads/2020/01/tulip-trust-3-documents-produced-in-kleiman-vs-wright-lawsuit-280x139.jpg',
    description:
      'New documents produced in Ira Kleiman’s lawsuit against Dr. Craig Wright could provide important information about the early days of Bitcoin.',
    url:
      '/videos/tulip-trust-3-documents-produced-in-kleiman-vs-wright-lawsuit/',
    category: 'Business',
    datetime: '5 hours ago',
  },
  {
    id: 'mockArticles_____003',
    title: 'Tulip Trust 3 documents produced in Kleiman vs Wright lawsuit',
    image:
      'https://coingeek.com/wp-content/uploads/2020/01/tulip-trust-3-documents-produced-in-kleiman-vs-wright-lawsuit-280x139.jpg',
    description:
      'New documents produced in Ira Kleiman’s lawsuit against Dr. Craig Wright could provide important information about the early days of Bitcoin.',
    url:
      '/videos/tulip-trust-3-documents-produced-in-kleiman-vs-wright-lawsuit/',
    category: 'Business',
    datetime: '5 hours ago',
  },
  {
    id: 'mockArticles_____004',
    title: 'Tulip Trust 3 documents produced in Kleiman vs Wright lawsuit',
    image:
      'https://coingeek.com/wp-content/uploads/2020/01/tulip-trust-3-documents-produced-in-kleiman-vs-wright-lawsuit-280x139.jpg',
    description:
      'New documents produced in Ira Kleiman’s lawsuit against Dr. Craig Wright could provide important information about the early days of Bitcoin.',
    url:
      '/videos/tulip-trust-3-documents-produced-in-kleiman-vs-wright-lawsuit/',
    category: 'Business',
    datetime: '5 hours ago',
  },
  {
    id: 'mockArticles_____005',
    title: 'Ex-Mt. Gox CEO Mark Karpeles wants lawsuit dismissed',
    image:
      'https://coingeek.com/wp-content/uploads/2020/01/ex-mt-gox-ceo-mark-karpeles-wants-lawsuit-dismissed-280x139.jpg',
    description:
      'Mark Karpeles has asked a federal court to conclude a long-running lawsuit against him by dismissing the action.',
    url: '/videos/ex-mt-gox-ceo-mark-karpeles-wants-lawsuit-dismissed/',
    category: 'Business',
    datetime: '4 hours ago',
  },
  {
    id: 'mockArticles_____006',
    title: 'Tulip Trust 3 documents produced in Kleiman vs Wright lawsuit',
    image:
      'https://coingeek.com/wp-content/uploads/2020/01/tulip-trust-3-documents-produced-in-kleiman-vs-wright-lawsuit-280x139.jpg',
    description:
      'New documents produced in Ira Kleiman’s lawsuit against Dr. Craig Wright could provide important information about the early days of Bitcoin.',
    url:
      '/videos/tulip-trust-3-documents-produced-in-kleiman-vs-wright-lawsuit/',
    category: 'Business',
    datetime: '5 hours ago',
  },
  {
    id: 'mockArticles_____007',
    title: 'Tulip Trust 3 documents produced in Kleiman vs Wright lawsuit',
    image:
      'https://coingeek.com/wp-content/uploads/2020/01/tulip-trust-3-documents-produced-in-kleiman-vs-wright-lawsuit-280x139.jpg',
    description:
      'New documents produced in Ira Kleiman’s lawsuit against Dr. Craig Wright could provide important information about the early days of Bitcoin.',
    url:
      '/videos/tulip-trust-3-documents-produced-in-kleiman-vs-wright-lawsuit/',
    category: 'Business',
    datetime: '5 hours ago',
  },
  {
    id: 'mockArticles_____008',
    title: 'Tulip Trust 3 documents produced in Kleiman vs Wright lawsuit',
    image:
      'https://coingeek.com/wp-content/uploads/2020/01/tulip-trust-3-documents-produced-in-kleiman-vs-wright-lawsuit-280x139.jpg',
    description:
      'New documents produced in Ira Kleiman’s lawsuit against Dr. Craig Wright could provide important information about the early days of Bitcoin.',
    url:
      '/videos/tulip-trust-3-documents-produced-in-kleiman-vs-wright-lawsuit/',
    category: 'Business',
    datetime: '5 hours ago',
  },
  {
    id: 'mockArticles_____009',
    title: 'Tulip Trust 3 documents produced in Kleiman vs Wright lawsuit',
    image:
      'https://coingeek.com/wp-content/uploads/2020/01/tulip-trust-3-documents-produced-in-kleiman-vs-wright-lawsuit-280x139.jpg',
    description:
      'New documents produced in Ira Kleiman’s lawsuit against Dr. Craig Wright could provide important information about the early days of Bitcoin.',
    url:
      '/videos/tulip-trust-3-documents-produced-in-kleiman-vs-wright-lawsuit/',
    category: 'Business',
    datetime: '5 hours ago',
  },
]

export const newsByCategory = (categoryId, page = 1) => ({
  id: categoryId,
  name: categoryId ? categoryId.replace(/-/g, ' ') : '',
  totalItem: 200,
  page,
  articles: mockArticles,
})
